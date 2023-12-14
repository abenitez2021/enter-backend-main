import { Body, Controller, HttpCode, Logger, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UsuarioEntity } from 'src/entitys';
import { User } from '../auth/user.decorator'
import { NacionalidadesService } from './nacionalidades.service';

@Controller('nacionalidades')
export class NacionalidadesController {

    logger = new Logger('NacionalidadesController')

    constructor(private readonly _nacionalidadesService: NacionalidadesService) { }

     //Listar Nacionalidades
     @HttpCode(200)
     @UseGuards(AuthGuard())
     @Post('listar')
     async nacionalidadesListar(@User() user: UsuarioEntity,
         ) {
         return await this._nacionalidadesService.nacionalidadesListar(user);
     } 


}
