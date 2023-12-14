//import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class VisitasEntradaDto {

  @IsNotEmpty()
  @IsString()
  nombre: string;

  @IsNotEmpty()
  @IsString()
  apellido: string;

  @IsNotEmpty()
  @IsString()
  documento: string;

  @IsOptional()
  @IsNumber()
  idTipoDocumento: number;

  @IsOptional()
  @IsString()
  tipoDocumento: string;

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
  @IsString()
  identityCardNumber: string;

  @IsNotEmpty()
  @IsNumber()
  idDependencia: number;

  @IsOptional()
  @IsNumber()
  idPuesto: number;

  @IsOptional()
  @IsString()
  codigoTarjeta: string;

}
