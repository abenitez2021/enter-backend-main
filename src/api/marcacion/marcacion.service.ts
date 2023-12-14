import { Injectable, Logger } from '@nestjs/common';
import { UsuarioEntity } from 'src/entitys';
import { DataSource } from 'typeorm';
import { DependenciasCrearDto } from '../dependencias/dto/dependencias-crear.dto';
import { MarcacionCrearDto } from './dto/crear.dto';
import { MarcacionListarDto } from './dto/listar.dto';

@Injectable()
export class MarcacionService {

    logger = new Logger('MarcacionService');

    constructor(
        private dataSource: DataSource,
    ) { }

    //Crear Marcacion Guardia
    async marcacionUsuario(user: UsuarioEntity, dto: MarcacionCrearDto) {

        //console.log('datos', portafoliosCrearDto);     
        //Se llama al procedimiento en la bd. 
        const sp = 'call sp_marcacion_insert(?,?)';
        const parametros = [user.id,
                            dto.idDependencia ? dto.idDependencia : null];
        //Se ejecuta el sp.
        try {
            const result = await this.dataSource.query(sp, parametros) 
            return { ok: true, message: 'Marcacion realizada correctamente.', result: result[0][0]}; 
        } catch (error) {
                return { ok: false, message: 'No se pudo crear la marcacion. ' + error.message}
        } 
    }

    //Listar Marcacion
    async marcacionListar(dto: MarcacionListarDto, user : UsuarioEntity) {

        //console.log('datos', portafoliosCrearDto);     
        //Se llama al procedimiento en la bd. 
        const sp = 'call sp_marcacion_list(?,?,?,?,?)';
        const parametros = [dto.idRol ? dto.idRol :null,
                            dto.fechaDesde ? dto.fechaDesde : null,
                            dto.fechaHasta ? dto.fechaHasta : null,
                            dto.marcacion ? dto.marcacion : null,
                            dto.idDependencia ? dto.idDependencia : null,
                            ];
        //Se ejecuta el sp.
        try {
            const result = await this.dataSource.query(sp, parametros) 
            return { ok: true, message: 'Marcacion listada correctamente.', result: result[0]}; 
        } catch (error) {
                return { ok: false, message: 'No se pudo listar la marcacion. ' + error.message}
        } 
    }




}
