import {Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, BaseEntity } from "typeorm";

@Entity()
export class User extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: "varchar", length: 100, nullable: false})
    name: string;

    @Column({type: "varchar", length: 50, unique: true, nullable: false})
    email: string;

    @Column({type: "varchar", length: 20, unique: false, nullable: true})
    password: string;

    @Column({default: true})
    active: boolean;
    
    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

}