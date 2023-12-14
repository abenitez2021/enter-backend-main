////import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class MarcacionCrearDto {

  @IsOptional()
  @IsNumber()
  idDependencia: number;

}
