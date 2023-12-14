import { Body, Controller, HttpCode, Logger, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UsuarioEntity } from 'src/entitys';
import { User } from '../auth/user.decorator';
import { MarcacionCrearDto } from './dto/crear.dto';
import { MarcacionListarDto } from './dto/listar.dto';
import { MarcacionService } from './marcacion.service';

@Controller('marcacion')
export class MarcacionController {

    logger = new Logger('MarcacionController')

    constructor(private readonly _marcacionService: MarcacionService) { }

    //Crear Marcacion
    @HttpCode(200)
    @UseGuards(AuthGuard())
    @Post('marcar')
    async marcacionUsuario(@User() user: UsuarioEntity, @Body() dto: MarcacionCrearDto
        ) {
        return await this._marcacionService.marcacionUsuario(user, dto);
    }

    //Listar Marcacion
    @HttpCode(200)
    @UseGuards(AuthGuard())
    @Post('listar')
    async marcacionListar(@Body() dto: MarcacionListarDto,
                       @User() user: UsuarioEntity,
        ) {
        return await this._marcacionService.marcacionListar(dto, user);
    }


}
