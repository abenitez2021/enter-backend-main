import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import config from './config/config';
import { DatabasesModule } from './database/database.module';
import { ApiModule } from './api/api.module';
import { LogsModule } from './logs/logs.module';
//import { MailerModule } from '@nestjs-modules/mailer';
//import { FirebaseModule } from './firebase/firebase.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      // envFilePath: enviroments[process.env.NODE_ENV] || '.env',
      load: [config],
      isGlobal: true,
    }),
    DatabasesModule,
    ApiModule,
    LogsModule,
    // MailerModule.forRoot({
    //   transport:{
    //     host:'smtp.sendgrid.net',
    //     auth: {
    //       user: 'apikey',
    //       pass: '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'
    //     }

    //   }
    // }),
    // FirebaseModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {


  static port: number | string;

  constructor() {

    AppModule.port = process.env.API_PORT;
    
  }
}
