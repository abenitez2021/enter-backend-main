import { Injectable, Logger } from '@nestjs/common';
import { DataSource } from 'typeorm';

@Injectable()
export class RolespantallasService {

    logger = new Logger('RolespantallasService');

    constructor(
        private dataSource: DataSource,
    ) { }

    //Puestos Crear
    async rolListar() {
  
        //Se llama al procedimiento en la bd. 
        const sp = 'call sp_rol_list()';
        const parametros = [];
        //Se ejecuta el sp.
        try {
            const result = await this.dataSource.query(sp, parametros) 
            return { ok: true, message: 'Rol listado correctamente.', result: result[0]}; 
        } catch (error) {
                return { ok: false, message: 'No se pudo listar el rol. ' + error.message}
        } 
    }

}
