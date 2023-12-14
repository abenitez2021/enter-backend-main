import { existsSync, mkdirSync } from "fs";
import { diskStorage } from "multer";
import * as path from "path";
import { v4 as uuidv4 } from 'uuid';
import { generateVisitaDocumentoPath } from "./file-paths";

    export const VisitasFotoStorage = diskStorage({
        // Destination storage path details
        destination: (req: any, file: any, cb: any) => {

            generateVisitaDocumentoPath();
            const pathVisitas = path.resolve(  '/Applications/XAMPP/htdocs/enter/servidor/documentos',req.params.nro, req.params.id);
        
            const existe = existsSync( pathVisitas );
            if ( !existe ) {
                mkdirSync( pathVisitas, { recursive: true } );
            }

            cb(null, pathVisitas);

        },
        filename: (req: any, file: any, cb: any) => {           

            const extension = path.extname(file.originalname);

            const fullname = `foto${ extension }`;

            console.log('filename => ', fullname);

            cb(null,fullname);
        
        }  
    });

    export const VisitasFrenteStorage = diskStorage({
        // Destination storage path details
        destination: (req: any, file: any, cb: any) => {

            generateVisitaDocumentoPath();
            const pathVisitas = path.resolve(  '/Applications/XAMPP/htdocs/enter/servidor/documentos',req.params.nro, req.params.id);
        
            const existe = existsSync( pathVisitas );
            if ( !existe ) {
                mkdirSync( pathVisitas, { recursive: true } );
            }

            cb(null, pathVisitas);

        },
        filename: (req: any, file: any, cb: any) => {           

            const extension = path.extname(file.originalname);

            const fullname = `frente${ extension }`;

            console.log('filename => ', fullname);

            cb(null,fullname);
        
        }  
    });

    export const VisitasDorsoStorage = diskStorage({
        // Destination storage path details
        destination: (req: any, file: any, cb: any) => {

            generateVisitaDocumentoPath();
            const pathVisitas = path.resolve(  '/Applications/XAMPP/htdocs/enter/servidor/documentos',req.params.nro, req.params.id);
        
            const existe = existsSync( pathVisitas );
            if ( !existe ) {
                mkdirSync( pathVisitas, { recursive: true } );
            }

            cb(null, pathVisitas);

        },
        filename: (req: any, file: any, cb: any) => {           

            const extension = path.extname(file.originalname);

            const fullname = `dorso${ extension }`;

            console.log('filename => ', fullname);

            cb(null,fullname);
        
        }  
    });

