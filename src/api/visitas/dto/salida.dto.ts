//import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class VisitasSalidaDto {

  @IsNotEmpty()
  @IsNumber()
  idVisita: number; 
}
