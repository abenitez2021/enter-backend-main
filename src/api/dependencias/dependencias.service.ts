import { Injectable, Logger } from '@nestjs/common';
import { UsuarioEntity } from 'src/entitys';
import { DataSource } from 'typeorm';
import { DependenciasActualizarDto } from './dto/dependencias-actualizar.dto';
import { DependenciasCrearDto } from './dto/dependencias-crear.dto';
import { DependenciasInactivarDto } from './dto/dependencias-inactivar.dto';

@Injectable()
export class DependenciasService {

    logger = new Logger('DependenciasService');

    constructor(
        private dataSource: DataSource,
    ) { }

    //Dependencias Crear
    async dependenciasCrear(user: UsuarioEntity, dto: DependenciasCrearDto) {
  
        //Se llama al procedimiento en la bd. 
        const sp = 'call sp_dependencias_insert(?,?,?)';
        const parametros = [user.id,
                            dto.nombre,
                            dto.color
                            ];
        //Se ejecuta el sp.
        try {
            const result = await this.dataSource.query(sp, parametros) 
            return { ok: true, message: 'Dependencias creada correctamente.', result: result[0][0]}; 
        } catch (error) {
                return { ok: false, message: 'No se pudo crear la dependencia. ' + error.message}
        } 
    }

    //Dependencias Listar
    async dependenciasListar(user: UsuarioEntity) {
  
        //Se llama al procedimiento en la bd. 
        const sp = 'call sp_dependencias_list(?)';
        const parametros = [user.id
                            ];
        //Se ejecuta el sp.
        try {
            const result = await this.dataSource.query(sp, parametros) 
            return { ok: true, message: 'Dependencias listada correctamente.', result: result[0]}; 
        } catch (error) {
                return { ok: false, message: 'No se pudo listar la dependencia. ' + error.message}
        } 
    }

   //Dependencias Inactivar
   async dependenciasInactivar(user: UsuarioEntity, dto: DependenciasInactivarDto) {
  
    //Se llama al procedimiento en la bd. 
    const sp = 'call sp_dependencias_inactive(?,?)';
    const parametros = [user.id,
                        dto.idDependencia
                        ];
    //Se ejecuta el sp.
        try {
            const result = await this.dataSource.query(sp, parametros) 
            return { ok: true, message: 'Dependencias inactivada correctamente.', result: result[0]}; 
        } catch (error) {
                return { ok: false, message: 'No se pudo inactivar la dependencia. ' + error.message}
        } 
    }


   //Dependencias Actualizar
   async dependenciasActualizar(user: UsuarioEntity, dto: DependenciasActualizarDto) {
  
    //Se llama al procedimiento en la bd. 
    const sp = 'call sp_dependencias_update(?,?,?,?)';
    const parametros = [user.id,
                        dto.idDependencia,
                        dto.nombre,
                        dto.color
                        ];
    //Se ejecuta el sp.
        try {
            const result = await this.dataSource.query(sp, parametros) 
            return { ok: true, message: 'Dependencias actualizada correctamente.', result: result[0]}; 
        } catch (error) {
                return { ok: false, message: 'No se pudo actualizar la dependencia. ' + error.message}
        } 
    }


}
