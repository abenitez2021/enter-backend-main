import { Injectable, Logger } from '@nestjs/common';
import { UsuarioEntity } from 'src/entitys';
import { DataSource } from 'typeorm';

@Injectable()
export class NacionalidadesService {

    logger = new Logger('NacionalidadesService');

    constructor(
        private dataSource: DataSource,
    ) { }

    //Listar Marcacion
    async nacionalidadesListar(user : UsuarioEntity) {

        //Se llama al procedimiento en la bd. 
        const sp = 'call sp_nacionalidades_list()';
        const parametros = [];
        //Se ejecuta el sp.
        try {
            const result = await this.dataSource.query(sp, parametros) 
            return { ok: true, message: 'Nacionalidades listadas correctamente.', result: result[0]}; 
        } catch (error) {
                return { ok: false, message: 'No se pudo listar las nacionalidades. ' + error.message}
        } 
    }


}
