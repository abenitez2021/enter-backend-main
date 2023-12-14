import { Body, Controller, HttpCode, Logger, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UsuarioEntity } from 'src/entitys';
import { User } from '../auth/user.decorator';
import { DependenciasService } from './dependencias.service';
import { DependenciasActualizarDto } from './dto/dependencias-actualizar.dto';
import { DependenciasCrearDto } from './dto/dependencias-crear.dto';
import { DependenciasInactivarDto } from './dto/dependencias-inactivar.dto';

@Controller('dependencias')
export class DependenciasController {

    logger = new Logger('DependenciasController')

    constructor(private readonly _dependenciasService: DependenciasService) { }

    //Dependencias Crear
    @HttpCode(200)
    @UseGuards(AuthGuard())
    @Post('crear')
    async dependenciasCrear(@User() user: UsuarioEntity, @Body() dto: DependenciasCrearDto
        ) {
        return await this._dependenciasService.dependenciasCrear(user, dto);
    }

    //Dependencias Listar
    @HttpCode(200)
    @UseGuards(AuthGuard())
    @Post('listar')
    async dependenciasListar(@User() user: UsuarioEntity
        ) {
        return await this._dependenciasService.dependenciasListar(user);
    }

    //Dependencias Inactivar
    @HttpCode(200)
    @UseGuards(AuthGuard())
    @Post('inactivar')
    async dependenciasInactivar(@User() user: UsuarioEntity, @Body() dto: DependenciasInactivarDto
        ) {
        return await this._dependenciasService.dependenciasInactivar(user, dto);
    }

    //Dependencias Actualizar
    @HttpCode(200)
    @UseGuards(AuthGuard())
    @Post('actualizar')
    async dependenciasActualizar(@User() user: UsuarioEntity, @Body() dto: DependenciasActualizarDto
        ) {
        return await this._dependenciasService.dependenciasActualizar(user, dto);
    }

}
