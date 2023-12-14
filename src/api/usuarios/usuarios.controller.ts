import { Body, Controller, Get, HttpCode, Logger, Param, Post, Res, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UsuarioEntity } from 'src/entitys';
import { User } from '../auth/user.decorator';
import { UsuariosListarDto } from './dto/listar.dto';
import { UsuariosService } from './usuarios.service';
import { FilesInterceptor } from '@nestjs/platform-express';
import { Response } from 'express';

@Controller('usuarios')
export class UsuariosController {

    logger = new Logger('UsuariosController')

    constructor(private readonly _usuariosService: UsuariosService) { }

     //Listar Marcacion
     @HttpCode(200)
     @UseGuards(AuthGuard())
     @Post('listar')
     async usuariosListar(@Body() dto: UsuariosListarDto,
                        @User() user: UsuarioEntity,
         ) {
         return await this._usuariosService.usuariosListar(dto, user);
     }   

   //Mostrar imagenes Guardadas
    //@UseGuards(AuthGuard('jwt'))    @Get('/documento-foto/puesto/:idPuesto/archivo/:img')
    @Get('/ver-archivo/nro/:doc/archivo/:img')
    async verDocumentoGuardadoFoto(
        @Param('doc') nroDocumento: string,
        @Param('img') imagen: string,
        @Res() res: Response
    ) {
        try {
            const fullPath = await this._usuariosService.verDocumentoGuardadoFoto(nroDocumento, imagen);
            res.sendFile(fullPath);
        } catch (error) {
            res.status(404).send('No se ha encontrado el archivo.');
        }
    }

    
}
