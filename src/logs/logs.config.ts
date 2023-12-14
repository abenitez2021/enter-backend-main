import { utilities as nestWinstonModuleUtilities, WinstonModule } from 'nest-winston';
import * as winston from 'winston';

const logLevels = {
    error: 0,
    warn: 1,
    info: 2,
    http: 3,
    verbose: 4,
    debug: 5,
}

export const logsProviders = [

    WinstonModule.forRootAsync({
        useFactory: () => ({
            levels: logLevels,
            transports: [
                new winston.transports.Console({
                    format: winston.format.combine(
                        winston.format.timestamp(),
                        nestWinstonModuleUtilities.format.nestLike(),
                    )
                }),
                new winston.transports.File({
                    format: winston.format.combine(
                        winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
                        winston.format.ms(),
                        winston.format.prettyPrint(),
                        //nestWinstonModuleUtilities.format.nestLike(),
                        //winston.format.uncolorize()
                    ),
                    filename: 'wom-backend.log'
                }),
                new winston.transports.File({
                    format: winston.format.combine(
                        winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
                        winston.format.ms(),
                        winston.format.prettyPrint()
                        // nestWinstonModuleUtilities.format.nestLike(),
                        // winston.format.uncolorize()
                    ),
                    filename: 'wom-errors.log',
                    level: 'error'
                })
            ],
        }),
        inject: [],
    })

];


