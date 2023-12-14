import { Body, Controller, HttpCode, Logger, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UsuarioEntity } from 'src/entitys';
import { User } from '../auth/user.decorator'
import { TipodocumentoService } from './tipodocumento.service';

@Controller('tipodocumento')
export class TipodocumentoController {

    logger = new Logger('TipodocumentoController')

    constructor(private readonly _tipodocumentoService: TipodocumentoService) { }

     //Listar Tipo Documento
     @HttpCode(200)
     @UseGuards(AuthGuard())
     @Post('listar')
     async tipoDocumentoListar(@User() user: UsuarioEntity,
         ) {
         return await this._tipodocumentoService.tipoDocumentoListar(user);
     } 



}
