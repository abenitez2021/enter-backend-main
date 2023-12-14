import { Controller, Post, Body, UseInterceptors, ClassSerializerInterceptor, UseGuards, Logger, HttpCode, Put } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UsuarioEntity } from 'src/entitys';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { RegistroDto } from './dto/registro.dto';
import { User } from './user.decorator';


@Controller('auth')
export class AuthController {

    logger = new Logger('AuthController')

    constructor(private readonly _authService: AuthService) {}

    //Registro Usuario
    @HttpCode(200)
    @UseInterceptors(ClassSerializerInterceptor)
    @UseGuards(AuthGuard())
    @Post('/registro')
    async registroUsuario(@Body() dto: RegistroDto, @User() user: UsuarioEntity) {
      return await this._authService.registroUsuario(dto, user);
    }
    
    //Login correo
    @HttpCode(200)
    @Post('/login')
    async loginUsuario(@Body() dto: LoginDto) {
      return this._authService.loginUsuario(dto);
    }

      //Login correo
      @HttpCode(200)
      @UseGuards(AuthGuard())
      @Post('/datos')
      async datosUsuario(@User() user: UsuarioEntity) {
        return this._authService.datosUsuario(user);
      }

  //   @HttpCode(200)
  //   @UseGuards(AuthGuard())
  //   @Post('/cambiar-pasword')
  //   async cambiarContrasena(@Body() dto: NewPasswordDto, @User() user: UsuarioEntity) {
  //     return await this._authService.cambiarContrasena(dto, user.id);
  //   }

  //   //Solicita pin via correo
  //   @HttpCode(200)
  //   @Post('/solicitar-pin-correo')
  //   async enviarPinCorreo(@Body() dto: SolicitarPinEmailDto) {
  //         return await this._authService.generarPinViaCorreo(dto);
  //   }

  //   //Solicita pin via correo
  //   @HttpCode(200)
  //   @Post('/validar-pin-correo')
  //   async comprobarPinCorreo(@Body() dto: ValidarPinEmailDto) {
  //           return await this._authService.validarPinViaCorreo(dto);
  //   }

  //   @HttpCode(200)
  //   @Post('/resset-pasword')
  //   async ressetContrasena(@Body() dto: RessetPasswordDto) {
  //     return await this._authService.ressetContrasena(dto);
  //   }

}

