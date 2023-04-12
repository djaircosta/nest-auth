import { Options } from "@nestjs/common";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    first_name;

    @Column()
    last_name;

    @Column({
        unique: true
    
    })
    email: string;

    
    @Column()
    password: string; 

}