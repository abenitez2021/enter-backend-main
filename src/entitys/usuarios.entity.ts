import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, BaseEntity, OneToMany, OneToOne, JoinColumn, ManyToMany, ManyToOne } from "typeorm";
import { Exclude } from 'class-transformer';
import { EstadoBaseEnum } from "./enums/estado-base.enum";


@Entity({name: "usuarios"})
export class UsuarioEntity extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: "varchar", name: "correo" , nullable: true })
    email: string;

    @Exclude()
    @Column({ type: "varchar", name: "contrasena" , nullable: false, length: 200 })
    password: string;

    @Column({type: "varchar", name: "nombre" , nullable: false })
    nombre: string;

    @Column({type: "varchar", name: "apellido" , nullable: false })
    apellido: string;

    @Column({type: "varchar", name: "documento" , nullable: false })
    documento: string;

    @Column({type: "varchar", name: "tipo_documento" , nullable: false })
    tipoDocumento: string;

    // @Column({type: "varchar", name: "foto_perfil" , nullable: false })
    // fotoPerfil: string;

    @Column({type: "integer", name: "id_rol" , nullable: false })
    idRol: number;

    @Column({type: "date", name: "nro_celular" , nullable: false })
    celular: string;

    @Column({type: "date", name: "nro_telefono" , nullable: false })
    telefono: string;

    // @Column({type: "varchar", name: "nro_documento" , nullable: true })
    // nroDocumento: string;

    // @Column({type: "varchar", name: "foto_princ" , nullable: true })
    // fotoPrincipal: string;

    // @Exclude()
    // @Column({ type: "varchar", name: "token_facebook", nullable: true })
    // facebookId: string;

    // @Exclude()
    // @Column({ type: "varchar", name: "token_google", nullable: true, })
    // googleId: string;

    // @Exclude()
    // @Column({ type: "varchar", name: "token_apple", nullable: true })
    // appleId: string;


    @Column({ type: "enum", name: "estado", enum: EstadoBaseEnum, default: EstadoBaseEnum.ACTIVO, nullable: false })
    estado: EstadoBaseEnum;


    // Relaciones
    constructor(partial?: Partial<UsuarioEntity>) {
        super();
        Object.assign(this, partial);
    }

}