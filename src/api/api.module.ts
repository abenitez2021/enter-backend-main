import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioEntity } from 'src/entitys';
import { MulterModule } from '@nestjs/platform-express';
import { HttpModule } from '@nestjs/axios';
//import { FirebaseModule } from 'src/firebase/firebase.module';
import { MarcacionController } from './marcacion/marcacion.controller';
import { MarcacionService } from './marcacion/marcacion.service';
import { VisitasController } from './visitas/visitas.controller';
import { VisitasService } from './visitas/visitas.service';
import { DashboardController } from './dashboard/dashboard.controller';
import { DashboardService } from './dashboard/dashboard.service';
import { ConfiguracionesController } from './configuraciones/configuraciones.controller';
import { ConfiguracionesService } from './configuraciones/configuraciones.service';
import { DependenciasController } from './dependencias/dependencias.controller';
import { DependenciasService } from './dependencias/dependencias.service';
import { UsuariosController } from './usuarios/usuarios.controller';
import { UsuariosService } from './usuarios/usuarios.service';
import { NacionalidadesController } from './nacionalidades/nacionalidades.controller';
import { NacionalidadesService } from './nacionalidades/nacionalidades.service';
import { TipodocumentoController } from './tipodocumento/tipodocumento.controller';
import { TipodocumentoService } from './tipodocumento/tipodocumento.service';
import { PuestosController } from './puestos/puestos.controller';
import { PuestosService } from './puestos/puestos.service';
import { RolespantallasController } from './rolespantallas/rolespantallas.controller';
import { RolespantallasService } from './rolespantallas/rolespantallas.service';

@Module({
    imports: [
        AuthModule,
        HttpModule,
        MulterModule.register(),
        TypeOrmModule.forFeature([
            UsuarioEntity
        ]),
        //FirebaseModule
    ],
    controllers: [MarcacionController, VisitasController, DashboardController, ConfiguracionesController, DependenciasController, UsuariosController, NacionalidadesController, TipodocumentoController, PuestosController, RolespantallasController],
    providers: [MarcacionService, VisitasService, DashboardService, ConfiguracionesService, DependenciasService, UsuariosService, NacionalidadesService, TipodocumentoService, PuestosService, RolespantallasService]
})
export class ApiModule {}
