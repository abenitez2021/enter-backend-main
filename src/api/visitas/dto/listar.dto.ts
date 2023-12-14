//import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class VisitasListarDto {

  @IsOptional()
  @IsNumber()
  idPuesto: number; 
  
  @IsOptional()
  @IsNumber()
  idVisita: number; 

  @IsOptional()
  @IsString()
  fechaDesde: string; 

  @IsOptional()
  @IsString()
  fechaHasta: string;

  @IsOptional()
  @IsString()
  marcacion: string;

  @IsOptional()
  @IsString()
  documento: string;

  @IsOptional()
  @IsNumber()
  idDependencia: number;

}
