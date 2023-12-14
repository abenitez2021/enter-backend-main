////import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class UsuariosListarDto {

  @IsOptional()
  @IsNumber()
  idRol: number;

  @IsOptional()
  @IsString()
  estado: string;



}
