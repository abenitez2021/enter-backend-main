import { Injectable, Inject, Scope } from '@nestjs/common';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { Logger } from 'winston';
import { LogLevelEnum } from './loglevel.enum';

@Injectable({ scope: Scope.TRANSIENT })
export class LogsService {


    context = '';

    constructor(@Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger) {
        
    }

    setContext(context: string) {
        this.context = context;
    }

    error(message: string, trace?: any) {
        this.logger.log(LogLevelEnum.error, message, {context: this.context, trace});
    }

    warn(message: string, trace?: any) {
        this.logger.log(LogLevelEnum.warn, message, {context: this.context, trace});
    }

    debug(message: string, trace?: any) {
        this.logger.log(LogLevelEnum.debug, message, {context: this.context, trace});
    }

    verbose(message: string, trace?: any) {
        this.logger.log(LogLevelEnum.verbose, message, {context: this.context, trace});
    }

    info(message: string, trace?: any) {
        this.logger.log(LogLevelEnum.info, message, {context: this.context, trace});
    }

    http(message: string, trace?: any) {
        this.logger.log(LogLevelEnum.http, message, {context: this.context, trace});
    }


}
