import { Body, Controller, Get, HttpCode, Logger, Param, ParseIntPipe, Post, Res, UploadedFiles, UseGuards, UseInterceptors } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { FilesInterceptor } from '@nestjs/platform-express';
import { Response } from 'express';
import path from 'path';
import { UsuarioEntity } from 'src/entitys';
import { imgFilter } from 'src/utils/file-filters';
import { VisitasDorsoStorage, VisitasFotoStorage, VisitasFrenteStorage } from 'src/utils/file-storages';
import { User } from '../auth/user.decorator';
import { entradaDatosDto } from './dto/entrada-datos.dto';
import { VisitasEntradaDto } from './dto/entrada.dto';
import { FiltroSDKDto } from './dto/filtro-sdk.dto';
import { VisitasListarDto } from './dto/listar.dto';
import { VisitasSalidaDto } from './dto/salida.dto';
import { VisitasService } from './visitas.service';

@Controller('visitas')
export class VisitasController {

    logger = new Logger('VisitasController')

    constructor(private readonly _visitasService: VisitasService) { }

//LEER ARCHIVOS DEL SDK

    //Leer Archivo JSON generado por el SDK
    @HttpCode(200)
    @UseGuards(AuthGuard())
    @Post('sdk-archivo')
    async leerArchivoJson(@Body() dto: FiltroSDKDto,
        ) { 
        return await this._visitasService.leerArchivoJson(dto);
    }

    //Mostrar imagenes documento Foto perfil
    //@UseGuards(AuthGuard('jwt'))
    @Get('/documento-foto/puesto/:idPuesto/archivo/:img')
    async verDocumentoFoto(
        @Param('idPuesto') idPuesto: number,
        @Param('img') imagen: string,
        @Res() res: Response
    ) {
        try {
            const fullPath = await this._visitasService.verDocumentoFoto(idPuesto, imagen);
            res.sendFile(fullPath);
        } catch (error) {
            res.status(404).send('No se ha encontrado el archivo.');
        }
    }

    //Mostrar imagenes documento Foto perfil
    //@UseGuards(AuthGuard('jwt'))
    @Get('/documento-frente/puesto/:idPuesto/archivo/:img')
    async verDocumentoFrente(
        @Param('idPuesto') idPuesto: number,
        @Param('img') imagen: string,
        @Res() res: Response
    ) {
        try {
            const fullPath = await this._visitasService.verDocumentoFrente(idPuesto, imagen);
            res.sendFile(fullPath);
        } catch (error) {
            res.status(404).send('No se ha encontrado el archivo.');
        }
    }

    //Mostrar imagenes documento Foto perfil
    //@UseGuards(AuthGuard('jwt'))
    @Get('/documento-dorso/puesto/:idPuesto/archivo/:img')
    async verDocumentoDorso(
        @Param('idPuesto') idPuesto: number,
        @Param('img') imagen: string,
        @Res() res: Response
    ) {
        try {
            const fullPath = await this._visitasService.verDocumentoDorso(idPuesto, imagen);
            res.sendFile(fullPath);
        } catch (error) {
            res.status(404).send('No se ha encontrado el archivo.');
        }
    }

    //Crear registro de entrada visita
    @HttpCode(200)
    @UseGuards(AuthGuard())
    @Post('registrar-entrada')
    async registrarEntrada(@User() user: UsuarioEntity,
                        @Body() dto: VisitasEntradaDto,
                        @Body() datos: entradaDatosDto
        ) {
        return await this._visitasService.registrarEntrada(dto, user, datos);
    }

    //Eliminar los archivos de la carpeta SDK
    @HttpCode(200)
    @UseGuards(AuthGuard())
    @Post('eliminar-archivos-sdk')
    async eliminarArchivosCarpetaSDK(@Body() dto: FiltroSDKDto,
        ) {
        return await this._visitasService.eliminarArchivosCarpetaSDK(dto);
    }

    //Listar Visitantes
    @HttpCode(200)
    @UseGuards(AuthGuard())
    @Post('listar')
    async visitaListar(@Body() dto: VisitasListarDto,
                        @User() user: UsuarioEntity,
        ) {
        return await this._visitasService.visitaListar(dto, user);
    }

    //Listar Visitantes Group
    @HttpCode(200)
    @UseGuards(AuthGuard())
    @Post('listar-group')
    async visitaListarGroup(@Body() dto: VisitasListarDto,
                        @User() user: UsuarioEntity,
        ) {
        return await this._visitasService.visitaListarGroup(dto, user);
    }

    //Crear Salida
    @HttpCode(200)
    @UseGuards(AuthGuard())
    @Post('salida')
    async visitaSalida(@Body() dto: VisitasSalidaDto
        ) {
        return await this._visitasService.visitaSalida(dto);
    }

    //Listar Dashboard
    @HttpCode(200)
    @UseGuards(AuthGuard())
    @Post('dashboard')
    async visitaDashboard() {
        return await this._visitasService.visitaDashboard();
    }

    //Buscar Visitantes
    @HttpCode(200)
    @UseGuards(AuthGuard())
    @Post('buscar')
    async visitaBuscarListar(@Body() dto: VisitasListarDto,
                        @User() user: UsuarioEntity,
        ) {
        return await this._visitasService.visitaBuscarListar(dto, user);
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
            const fullPath = await this._visitasService.verDocumentoGuardadoFoto(nroDocumento, imagen);
            res.sendFile(fullPath);
        } catch (error) {
            res.status(404).send('No se ha encontrado el archivo.');
        }
    }

    // @Get('/documentos/busqueda/:nroDoc/visita/:idVisita/archivo/:img')
    // async verDocumentoGuardadoFrente(
    //     @Param('nroDoc') nroDocumento: string,
    //     @Param('idVisita') idVisita: number,
    //     @Param('img') imagen: string,
    //     @Res() res: Response
    // ) {
    //     try {
    //         const fullPath = await this._visitasService.verImagenes(nroDocumento, idVisita, imagen);
    //         res.sendFile(fullPath);
    //     } catch (error) {
    //         res.status(404).send('No se ha encontrado el archivo.');
    //     }
    // }

    // @Get('/documentos/busqueda/:nroDoc/visita/:idVisita/archivo/:img')
    // async verDocumentoGuardadoDorso(
    //     @Param('nroDoc') nroDocumento: string,
    //     @Param('idVisita') idVisita: number,
    //     @Param('img') imagen: string,
    //     @Res() res: Response
    // ) {
    //     try {
    //         const fullPath = await this._visitasService.verImagenes(nroDocumento, idVisita, imagen);
    //         res.sendFile(fullPath);
    //     } catch (error) {
    //         res.status(404).send('No se ha encontrado el archivo.');
    //     }
    // }











//CREAR FOTOS AUN SIN USO

    //Guardar imagen documento foto perfil 
    @UseGuards(AuthGuard('jwt'))  
    @Post('/imagen-foto/visita/:id/documento/:nro')
    @UseInterceptors(FilesInterceptor('imgs', 1, {fileFilter: imgFilter, storage: VisitasFotoStorage}))
     async subirImgDocumentoPerfil(@UploadedFiles() files: Array<any>, 
                            @Param('nro') nro: string,
                            @Param('id', ParseIntPipe) id: number): Promise<{ok: boolean, message: string; result: string;}> {
        await this._visitasService.subirImgDocumentoPerfil(id, files.map(file => file.filename));
        return {ok: true, message: 'Imagen subida exitosamente',result: null };
    }

    //Guardar imagen documento frente 
    @UseGuards(AuthGuard('jwt'))  
    @Post('/imagen-frente/visita/:id/documento/:nro')
    @UseInterceptors(FilesInterceptor('imgs', 1, {fileFilter: imgFilter, storage: VisitasFrenteStorage}))
     async subirImgDocumentoFrente(@UploadedFiles() files: Array<any>, 
                            @Param('nro') nro: string,
                            @Param('id', ParseIntPipe) id: number): Promise<{ok: boolean, message: string; result: string;}> {
        await this._visitasService.subirImgDocumentoFrente(id, files.map(file => file.filename));
        return {ok: true, message: 'Imagen subida exitosamente',result: null };
    }

    //Guardar imagen documento dorso 
    @UseGuards(AuthGuard('jwt'))  
    @Post('/imagen-dorso/visita/:id/documento/:nro')
    @UseInterceptors(FilesInterceptor('imgs', 1, {fileFilter: imgFilter, storage: VisitasDorsoStorage}))
     async subirImgDocumentoDorso(@UploadedFiles() files: Array<any>, 
                            @Param('nro') nro: string,
                            @Param('id', ParseIntPipe) id: number): Promise<{ok: boolean, message: string; result: string;}> {
        await this._visitasService.subirImgDocumentoDorso(id, files.map(file => file.filename));
        return {ok: true, message: 'Imagen subida exitosamente',result: null };
    }








}

