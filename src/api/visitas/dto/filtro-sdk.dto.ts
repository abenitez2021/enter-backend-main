//import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class FiltroSDKDto {

  @IsOptional()
  @IsNumber()
  idPuesto: number; 

  @IsOptional()
  @IsNumber()
  idDato: number; 

  @IsOptional()
  @IsNumber()
  idDocumento: number; 
}
