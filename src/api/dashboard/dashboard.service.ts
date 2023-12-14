import { Injectable, Logger } from '@nestjs/common';
import { UsuarioEntity } from 'src/entitys';
import { DataSource } from 'typeorm';

@Injectable()
export class DashboardService {

    logger = new Logger('DashboardService');

    constructor(
        private dataSource: DataSource,
    ) { }

    //Listar dashboard
    async listarCabecera(user: UsuarioEntity) {
  
        //Se llama al procedimiento en la bd. 
        const sp = 'call sp_dashboard_cabecera_list()';
        const parametros = [];
        //Se ejecuta el sp.
        try {
            const result = await this.dataSource.query(sp, parametros) 
            return { ok: true, message: 'Dashboard listado correctamente.', result: result[0]}; 
        } catch (error) {
                return { ok: false, message: 'No se pudo listar el dashboard. ' + error.message}
        } 
    }

    //Listar dashboard
    async listarVisita(user: UsuarioEntity) {
  
        //Se llama al procedimiento en la bd. 
        const sp = 'call sp_dashboard_visita_list()';
        const parametros = [];
        //Se ejecuta el sp.
        try {
            const result = await this.dataSource.query(sp, parametros) 
            return { ok: true, message: 'Dashboard listado correctamente.', result: result[0]}; 
        } catch (error) {
                return { ok: false, message: 'No se pudo listar el dashboard. ' + error.message}
        } 
    }

    //Listar dashboard
    async listarGraficaSemana(user: UsuarioEntity) {
  
        //Se llama al procedimiento en la bd. 
        const sp = 'call sp_grafica_semana_listar()';
        const parametros = [];
        //Se ejecuta el sp.
        try {
            const result = await this.dataSource.query(sp, parametros) 
            return { ok: true, message: 'Grafica semana listada correctamente.', result: result[0]}; 
        } catch (error) {
                return { ok: false, message: 'No se pudo listar la grafica. ' + error.message}
        } 
    }

    async listarDependenciaDia(user: UsuarioEntity) {
  
        //Se llama al procedimiento en la bd. 
        const sp = 'call sp_dashboard_dependencia(?,?)';
        const parametros = [user.id, "Entrada"];
        //Se ejecuta el sp.
        try {
            const result = await this.dataSource.query(sp, parametros) 
            return { ok: true, message: 'Dashboard listada correctamente.', result: result[0]}; 
        } catch (error) {
                return { ok: false, message: 'No se pudo listar el Dashboard. ' + error.message}
        } 
    }

    async listarDependenciaPermanencia(user: UsuarioEntity) {
  
        //Se llama al procedimiento en la bd. 
        const sp = 'call sp_dashboard_dependencia(?,?)';
        const parametros = [user.id, "Permanecen"];
        //Se ejecuta el sp.
        try {
            const result = await this.dataSource.query(sp, parametros) 
            return { ok: true, message: 'Dashboard listada correctamente.', result: result[0]}; 
        } catch (error) {
                return { ok: false, message: 'No se pudo listar el Dashboard. ' + error.message}
        } 
    }


}
