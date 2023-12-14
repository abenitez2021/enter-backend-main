import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class PuestosCrearDto {
  
    @IsNotEmpty()
    @IsString()
    descripcion: string;

    @IsNotEmpty()
    @IsString()
    nombrePuesto: string;

    @IsNotEmpty()
    @IsString()
    ipPuesto: string;

    @IsNotEmpty()
    @IsString()
    puerto: string;

    @IsNotEmpty()
    @IsString()
    ubicacionCarpeta: string;

    @IsNotEmpty()
    @IsString()
    subcarpeta: string;

    @IsOptional()
    @IsBoolean()
    esServidor: boolean;

    @IsNotEmpty()
    @IsString()
    tipo: string;

    @IsNotEmpty()
    @IsString()
    ubicacionServidor: string;



}