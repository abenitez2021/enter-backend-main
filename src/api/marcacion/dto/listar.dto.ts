////import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class MarcacionListarDto {

  @IsOptional()
  @IsString()
  fechaDesde: string; 

  @IsOptional()
  @IsString()
  fechaHasta: string;

  @IsOptional()
  @IsNumber()
  idRol: number;

  @IsOptional()
  @IsString()
  marcacion: string;

  @IsOptional()
  @IsNumber()
  idDependencia: number;

}
