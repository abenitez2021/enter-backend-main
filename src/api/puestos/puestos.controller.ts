import { Body, Controller, HttpCode, Logger, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UsuarioEntity } from 'src/entitys';
import { User } from '../auth/user.decorator';
import { PuestosActualizarDto } from './dto/actualizar.dto';
import { PuestosCrearDto } from './dto/crear.dto';
import { PuestosDto } from './dto/puesto-id.dto';
import { PuestosService } from './puestos.service';

@Controller('puestos')
export class PuestosController {

    logger = new Logger('PuestosController')

    constructor(private readonly _puestosService: PuestosService) { }

    //Puestos Crear
    @HttpCode(200)
    @UseGuards(AuthGuard())
    @Post('crear')
    async puestosCrear(@User() user: UsuarioEntity, @Body() dto: PuestosCrearDto
        ) {
        return await this._puestosService.puestosCrear(user, dto);
    }

    //Puestos Listar
    @HttpCode(200)
    @UseGuards(AuthGuard())
    @Post('listar')
    async puestosListar(@User() user: UsuarioEntity, @Body() dto: PuestosDto
        ) {
        return await this._puestosService.puestosListar(user, dto);
    }

    //Puestos Inactivar
    @HttpCode(200)
    @UseGuards(AuthGuard())
    @Post('inactivar')
    async puestosInactivar(@User() user: UsuarioEntity, @Body() dto: PuestosDto
        ) {
        return await this._puestosService.puestosInactivar(user, dto);
    }

    //Puestos Actualizar
    @HttpCode(200)
    @UseGuards(AuthGuard())
    @Post('actualizar')
    async puestosActualizar(@User() user: UsuarioEntity, @Body() dto: PuestosActualizarDto
        ) {
        return await this._puestosService.puestosActualizar(user, dto);
    }


}
