import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class entradaDatosDto {
  
    @IsOptional()
    @IsString()
    TransactionID: string;

    @IsOptional()
    @IsString()
    ComputerName: string;

    @IsOptional()
    @IsString()
    UserName: string;

    @IsOptional()
    @IsString()
    SDKVersion: string;

    @IsOptional()
    @IsString()
    FileVersion: string;

    @IsOptional()
    @IsString()
    DeviceType: string;

    @IsOptional()
    @IsString()
    DeviceNumber: string;

    @IsOptional()
    @IsString()
    DeviceLabelNumber: string;

}