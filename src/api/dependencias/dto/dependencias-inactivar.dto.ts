import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class DependenciasInactivarDto {

    @IsNotEmpty()
    @IsNumber()
    idDependencia: number;


}