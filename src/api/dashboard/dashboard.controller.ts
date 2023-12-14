import { Body, Controller, HttpCode, Logger, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UsuarioEntity } from 'src/entitys';
import { User } from '../auth/user.decorator';
import { DashboardService } from './dashboard.service';

@Controller('dashboard')
export class DashboardController {

    logger = new Logger('DashboardController')

    constructor(private readonly _dashboardService: DashboardService) { }

    //Dashboard cabecera
    @HttpCode(200)
    @UseGuards(AuthGuard())
    @Post('cabecera')
    async listarCabecera(@User() user: UsuarioEntity
        ) {
        return await this._dashboardService.listarCabecera(user);
    }

    //Dashboard cabecera
    @HttpCode(200)
    @UseGuards(AuthGuard())
    @Post('listar-visita')
    async listarVisita(@User() user: UsuarioEntity
        ) {
        return await this._dashboardService.listarVisita(user);
    }

    //Grafica semana
    @HttpCode(200)
    @UseGuards(AuthGuard())
    @Post('grafica-semana')
    async listarGraficaSemana(@User() user: UsuarioEntity
        ) {
        return await this._dashboardService.listarGraficaSemana(user);
    }

    //
    @HttpCode(200)
    @UseGuards(AuthGuard())
    @Post('dependencia-dia')
    async listarDependenciaDia(@User() user: UsuarioEntity
        ) {
        return await this._dashboardService.listarDependenciaDia(user);
    }

    //
    @HttpCode(200)
    @UseGuards(AuthGuard())
    @Post('dependencia-permanencia')
    async listarDependenciaPermanencia(@User() user: UsuarioEntity
        ) {
        return await this._dashboardService.listarDependenciaPermanencia(user);
    }

}
