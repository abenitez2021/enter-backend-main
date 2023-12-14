import { Injectable, Logger } from '@nestjs/common';
import { UsuarioEntity } from 'src/entitys';
import { DataSource } from 'typeorm';
import { UsuariosListarDto } from './dto/listar.dto';

@Injectable()
export class UsuariosService {

    logger = new Logger('UsuariosService');

    constructor(
        private dataSource: DataSource,
    ) { }

    //Listar Marcacion
    async usuariosListar(dto: UsuariosListarDto, user : UsuarioEntity) {

        //console.log('datos', portafoliosCrearDto);     
        //Se llama al procedimiento en la bd. 
        const sp = 'call sp_user_list(?,?)';
        const parametros = [dto.idRol ? dto.idRol :null,
                            dto.estado ? dto.estado : null
                            ];
        //Se ejecuta el sp.
        try {
            const result = await this.dataSource.query(sp, parametros) 
            return { ok: true, message: 'Usuarios listados correctamente.', result: result[0]}; 
        } catch (error) {
                return { ok: false, message: 'No se pudo listar los usuarios. ' + error.message}
        } 
    }

     //Mostrar Imagenes Guardadas
     async verDocumentoGuardadoFoto(nroDocumento : string, imagen : string) {

        const sp = 'call sp_visitas_puestos_list(?)';
        const parametros = [null]
        try {

            const result = await this.dataSource.query(sp, parametros) 
            const data = result[0][0];
            

            const fullPath = `${data.ubicacionServidor}/usuarios/${nroDocumento}/${imagen}`;

          return fullPath;
        } catch (error) {

        } 
    }


}
