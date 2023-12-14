import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class DependenciasCrearDto {
  
    @IsNotEmpty()
    @IsString()
    nombre: string;

    @IsNotEmpty()
    @IsString()
    color: string;

}