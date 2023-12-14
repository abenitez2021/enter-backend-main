import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { ConfigType } from '@nestjs/config';
import { JwtStrategy } from './strategies/jwt.strategy';
import config from '../../config/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioEntity } from '../../entitys';


@Module({
  imports: [
    PassportModule.register({
      defaultStrategy: 'jwt'
    }),
    JwtModule.registerAsync({
      useFactory(configService: ConfigType<typeof config>) {
        return {
          secret: configService.jwt.jwtSecret,
          signOptions: {
            expiresIn: "60 days",
          },
        };
      },
      inject: [config.KEY],
    }),
    TypeOrmModule.forFeature([
      UsuarioEntity
    ])
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
  exports: [JwtStrategy, PassportModule, AuthService]
})
export class AuthModule {
  
}
