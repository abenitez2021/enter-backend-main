import { ConfigType } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DataSourceOptions } from "typeorm";
import config from "../config/config";


export const databaseProviders = [
    TypeOrmModule.forRootAsync({
        useFactory: (configService: ConfigType<typeof config>) => {

            const { database } = configService;
            
            return {
                synchronize: false,
                type: 'mariadb',
                host: database.host,
                port: Number(database.port),
                username: database.user,
                database: database.name,
                password: database.password,
                entities: [__dirname + '/../**/*.entity{.ts,.js}'],
                migrations: [__dirname + '/migrations/*{.ts,.js}']
            } as DataSourceOptions;
        },
        inject: [config.KEY]
    })
];