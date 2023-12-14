////import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class LoginDto {
  
  // @ApiProperty({ type: 'string' })
  // @IsNotEmpty()
  // @IsString()
  // email: string; 

  //@ApiProperty({ type: 'string' })
  @IsNotEmpty()
  @IsString()
  documento: string; 

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsOptional()
  @IsNumber()
  idRol: number;


}
