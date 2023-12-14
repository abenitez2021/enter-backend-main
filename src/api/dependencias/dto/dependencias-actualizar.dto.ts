import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class DependenciasActualizarDto {

    @IsNotEmpty()
    @IsNumber()
    idDependencia: number;
  
    @IsNotEmpty()
    @IsString()
    nombre: string;

    @IsNotEmpty()
    @IsString()
    color: string;

}