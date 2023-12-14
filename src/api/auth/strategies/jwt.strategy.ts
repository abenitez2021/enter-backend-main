import { ConfigType } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { IJwtPayload } from "../jwt-payload.interface";
import config from '../../../config/config'
import { plainToInstance } from 'class-transformer';
import { InjectRepository } from '@nestjs/typeorm';
import { UsuarioEntity } from '../../../entitys';
import { Repository } from 'typeorm';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {

    constructor(
        @Inject(config.KEY)
        private readonly configService: ConfigType<typeof config>,
        @InjectRepository(UsuarioEntity)
        private readonly _usuario: Repository<UsuarioEntity>,
    ) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: configService.jwt.jwtSecret
        });
    }

    async validate(payload: IJwtPayload) {

        const loggedUser = await this._usuario.findOneBy({ id: payload.id });

        // TODO: Aplicar reglas de validacion de permisos

        if (!loggedUser) {
            throw new UnauthorizedException('No posee permisos');
        }

        return plainToInstance(UsuarioEntity, loggedUser);

    }
}
