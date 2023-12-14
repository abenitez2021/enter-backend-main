////import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class RegistroDto {

  @IsNotEmpty()
  @IsString()
  documento: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsNotEmpty()
  @IsString()
  nombre: string;

  @IsNotEmpty()
  @IsString()
  apellido: string;

  @IsNotEmpty()
  @IsNumber()
  idRol: number;

  @IsOptional()
  @IsNumber()
  idTipoDocumento: number;

  @IsNotEmpty()
  @IsString()
  tipoDocumento: string;

  @IsNotEmpty()
  @IsString()
  email: string; 

  @IsOptional()
  @IsString()
  celular: string;

  @IsOptional()
  @IsString()
  telefono: string;

  @IsOptional()
  @IsString()
  codigoNacionalidad: string;

  @IsOptional()
  @IsString()
  nacionalidad: string;

  @IsOptional()
  @IsString()
  fechaNacimiento: string;

  @IsOptional()
  @IsString()
  fechaExpiracionDocumento: string;

  @IsOptional()
  @IsString()
  fechaEmision: string;

  @IsOptional()
  @IsString()
  sexo: string;

  @IsOptional()
  @IsString()
  estadoCivil: string;

  @IsOptional()
  @IsNumber()
  idPuesto: number;

}
