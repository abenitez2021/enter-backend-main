import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, BaseEntity, OneToMany, OneToOne, JoinColumn, ManyToMany, ManyToOne } from "typeorm";
import { Exclude } from 'class-transformer';
import { EstadoBaseEnum } from "./enums/estado-base.enum";

@Entity({name: "TIPO_DIRECCION"})
export class TipoDireccionEntity extends BaseEntity {

    @PrimaryGeneratedColumn({name:"id_tp_direccion"})
    id: number;

    @Column({type: "varchar", name: "nombre" , nullable: false })
    nombre: string;

    @Column({type: "boolean", name: "texto_hub" , nullable: false })
    textoHub: string;

    @Column({ type: "enum", name: "estado", enum: EstadoBaseEnum, default: EstadoBaseEnum.ACTIVO, nullable: false })
    estado: EstadoBaseEnum;
}