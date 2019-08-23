import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Content } from "./content";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    // @OneToMany(type => Content, content => content.user)
    // content: Content[];

    @Column()
    email: string;

    @Column()
    firstName: string;

    @Column()
    lastName: string;
}