import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, BaseEntity, OneToMany, OneToOne, JoinColumn, ManyToMany, ManyToOne } from "typeorm";
import { Exclude } from 'class-transformer';
import { EstadoBaseEnum } from "./enums/estado-base.enum";

@Entity({name: "DIRECCIONES"})
export class DireccionEntity extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: "varchar", name: "nombre" , nullable: false })
    latitud: string;

    @Column({type: "varchar", name: "apellido" , nullable: false })
    longitud: string;

    @Column({type: "varchar", name: "nro_documento" , nullable: true })
    callePrincipal: string;

    @Column({type: "varchar", name: "correo" , nullable: true })
    calleSecundaria: string;

    @Column({type: "varchar", name: "usuario" , nullable: false })
    nro: string;

    @Column({ type: "varchar", name: "referencia" , nullable: false})
    referencia: string;

    @Column({type: "integer", name: "id_tp_direccion" , nullable: true })
    idTpDireccion: BigInteger;

    @Column({ type: "varchar", name: "alias" , nullable: false})
    alias: string;

    @Column({ type: "boolean", name: "predeterminado" , nullable: false})
    predeterminado: boolean;

    @Column({ type: "date", name: "fecha_create" , nullable: false})
    fechaCreate: Date;

    @Column({ type: "date", name: "fecha_update" , nullable: false})
    fechaUpdate: Date;

    @Column({ type: "enum", name: "estado", enum: EstadoBaseEnum, default: EstadoBaseEnum.ACTIVO, nullable: false })
    estado: EstadoBaseEnum;
}