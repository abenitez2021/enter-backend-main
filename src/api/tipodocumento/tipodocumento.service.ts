import { Injectable, Logger } from '@nestjs/common';
import { UsuarioEntity } from 'src/entitys';
import { DataSource } from 'typeorm';

@Injectable()
export class TipodocumentoService {

    logger = new Logger('TipodocumentoService');

    constructor(
        private dataSource: DataSource,
    ) { }

    //Listar Marcacion
    async tipoDocumentoListar(user : UsuarioEntity) {

        //Se llama al procedimiento en la bd. 
        const sp = 'call sp_tipo_documento_list()';
        const parametros = [];
        //Se ejecuta el sp.
        try {
            const result = await this.dataSource.query(sp, parametros) 
            return { ok: true, message: 'Tipos documentos listados correctamente.', result: result[0]}; 
        } catch (error) {
                return { ok: false, message: 'No se pudo listar los tipos de documentos. ' + error.message}
        } 
    }



}
