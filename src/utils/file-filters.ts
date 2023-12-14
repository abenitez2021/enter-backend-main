import { HttpException, HttpStatus } from "@nestjs/common";

export const imgFilter = (req: any, file: any, cb: any) => {
    if (file.mimetype.match(/\/(jpg|jpeg|png)$/)) {
        // Allow storage of file
        cb(null, true);
    } else {
        // Reject file
        cb(new HttpException(`Tipo de archivo no admitido ${file.mimetype}`, HttpStatus.BAD_REQUEST), false);
    }
}

export const documentilter = (req: any, file: any, cb: any) => {
    if (file.mimetype.match(/\/(pdf|xlsx|xls|docx|doc|json)$/)) {
        // Allow storage of file
        cb(null, true);
    } else {
        // Reject file
        cb(new HttpException(`Tipo de archivo no admitido ${file.mimetype}`, HttpStatus.BAD_REQUEST), false);
    }
}


export const customFilter = (req: any, file: any, cb: any) => {
    if (file.mimetype.match(/\/(pdf|xlsx|xls|docx|doc|jpg|jpeg|png)$/)) {
        // Allow storage of file
        cb(null, true);
    } else {
        // Reject file
        cb(new HttpException(`Tipo de archivo no admitido ${file.mimetype}`, HttpStatus.BAD_REQUEST), false);
    }
}

