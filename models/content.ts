import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { User } from "./user";

@Entity()
export class Content {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(type => User, user => user.content)
    user: User;

    @Column()
    text: string;
}