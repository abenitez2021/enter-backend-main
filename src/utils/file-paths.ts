import { existsSync, mkdirSync } from "fs";
import  * as path from "path";

export function generateVisitaDocumentoPath() {

    // Ruta a la carpeta existente
    const pathFiles = path.resolve( '/Applications/XAMPP/htdocs/enter/servidor'); 
    if ( !existsSync( pathFiles ) ) {
        mkdirSync( pathFiles );
    }

    //Crea la carpeta si no existe
    const pathVisitaFoto = path.resolve( '/Applications/XAMPP/htdocs/enter/servidor/documentos');
    //const pathVisitas = path.resolve(  __dirname, '../files/visitas');
    if ( !existsSync( pathVisitaFoto ) ) {
        mkdirSync( pathVisitaFoto );
    }
}



