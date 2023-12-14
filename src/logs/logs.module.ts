import { Module } from '@nestjs/common';
import { logsProviders } from './logs.config';
import { LogsService } from './logs.service';


@Module({
  imports: [...logsProviders],
  exports: [...logsProviders, LogsService],
  providers: [LogsService]
})
export class LogsModule {}
