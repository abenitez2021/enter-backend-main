import { Body, Controller, HttpCode, Logger, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UsuarioEntity } from 'src/entitys';
import { User } from '../auth/user.decorator';
import { ConfiguracionesService } from './configuraciones.service';

@Controller('configuraciones')
export class ConfiguracionesController {

    logger = new Logger('ConfiguracionesController')

    constructor(private readonly _configuracionesService: ConfiguracionesService) { }

    //Roles
    @HttpCode(200)
    @UseGuards(AuthGuard())
    @Post('rol-crear')
    async rolCrear(@User() user: UsuarioEntity
        ) {
        //return await this._configuracionesService.rolCrear(user);
    }

    //Roles
    @HttpCode(200)
    @UseGuards(AuthGuard())
    @Post('rol-listar')
    async rolListar(@User() user: UsuarioEntity
        ) {
        //return await this._configuracionesService.rolListar(user);
    }

    //Roles
    @HttpCode(200)
    @UseGuards(AuthGuard())
    @Post('rol-inactivar')
    async rolInactivar(@User() user: UsuarioEntity
        ) {
        //return await this._configuracionesService.rolInactivar(user);
    }

    //Roles
    @HttpCode(200)
    @UseGuards(AuthGuard())
    @Post('rol-actualizar')
    async rolActualizar(@User() user: UsuarioEntity
        ) {
        //return await this._configuracionesService.rolActualizar(user);
    }

}
