import { IsNotEmpty, IsNumber, IsOptional } from "class-validator";

export class PuestosDto {

    @IsOptional()
    @IsNumber()
    idPuesto: number;


}