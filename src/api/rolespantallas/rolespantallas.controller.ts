import { Controller, HttpCode, Logger, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { RolespantallasService } from './rolespantallas.service';

@Controller('rolespantallas')
export class RolespantallasController {

    logger = new Logger('RolespantallasController')

    constructor(private readonly _roles: RolespantallasService) { }

    //Listar Roles
    @HttpCode(200)
    @UseGuards(AuthGuard())
    @Post('rol-listar')
    async rolListar(
        ) { 
        return await this._roles.rolListar();
    }

}
