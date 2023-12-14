import { Injectable, Logger } from '@nestjs/common';
import { UsuarioEntity } from 'src/entitys';
import { DataSource } from 'typeorm';
import { PuestosActualizarDto } from './dto/actualizar.dto';
import { PuestosCrearDto } from './dto/crear.dto';
import { PuestosDto } from './dto/puesto-id.dto';

@Injectable()
export class PuestosService {

    logger = new Logger('PuestosService');

    constructor(
        private dataSource: DataSource,
    ) { }

    //Puestos Crear
    async puestosCrear(user: UsuarioEntity, dto: PuestosCrearDto) {
  
        //Se llama al procedimiento en la bd. 
        const sp = 'call sp_puestos_insert(?,?,?,?,?,?,?,?,?)';
        const parametros = [//user.id,
                            dto.descripcion,
                            dto.nombrePuesto,
                            dto.ipPuesto,
                            dto.puerto,
                            dto.ubicacionCarpeta,
                            dto.ubicacionCarpeta,
                            dto.subcarpeta ? dto.subcarpeta : null,
                            dto.esServidor ? dto.esServidor : null,
                            dto.tipo,
                            dto.ubicacionServidor ? dto.ubicacionServidor : null,
                            ];
        //Se ejecuta el sp.
        try {
            const result = await this.dataSource.query(sp, parametros) 
            return { ok: true, message: 'Puesto creado correctamente.', result: result[0][0]}; 
        } catch (error) {
                return { ok: false, message: 'No se pudo crear el puesto. ' + error.message}
        } 
    }

    //puestos Listar
    async puestosListar(user: UsuarioEntity, dto: PuestosDto) {
  
        //Se llama al procedimiento en la bd. 
        const sp = 'call sp_puestos_list(?)';
        const parametros = [//user.id
                            dto.idPuesto ? dto.idPuesto : null];
        //Se ejecuta el sp.
        try {
            const result = await this.dataSource.query(sp, parametros) 
            return { ok: true, message: 'puestos listados correctamente.', result: result[0]}; 
        } catch (error) {
                return { ok: false, message: 'No se pudo listar los puestos. ' + error.message}
        } 
    }

   //Puestos Inactivar
   async puestosInactivar(user: UsuarioEntity, dto: PuestosDto) {
  
    //Se llama al procedimiento en la bd. 
    const sp = 'call sp_puestos_inactive(?)';
    const parametros = [//user.id,
                        dto.idPuesto
                        ];
    //Se ejecuta el sp.
        try {
            const result = await this.dataSource.query(sp, parametros) 
            return { ok: true, message: 'Puesto inactivado correctamente.', result: result[0]}; 
        } catch (error) {
                return { ok: false, message: 'No se pudo inactivar el puesto. ' + error.message}
        } 
    }


   //Puestos Actualizar
   async puestosActualizar(user: UsuarioEntity, dto: PuestosActualizarDto) {
  
    //Se llama al procedimiento en la bd. 
    const sp = 'call sp_puestos_update(?,?,?,?,?,?,?,?,?,?)';
    const parametros = [//user.id,
                        dto.ipPuesto,
                        dto.descripcion,
                        dto.nombrePuesto,
                        dto.ipPuesto,
                        dto.puerto,
                        dto.ubicacionCarpeta,
                        dto.subcarpeta ? dto.subcarpeta : null,
                        dto.esServidor ? dto.esServidor : null,
                        dto.tipo,
                        dto.ubicacionServidor ? dto.ubicacionServidor : null,

                        ];
    //Se ejecuta el sp.
        try {
            const result = await this.dataSource.query(sp, parametros) 
            return { ok: true, message: 'Puestos actualizado correctamente.', result: result[0]}; 
        } catch (error) {
                return { ok: false, message: 'No se pudo actualizar el puesto. ' + error.message}
        } 
    }



}
