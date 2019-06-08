import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { User } from "./user";

@Entity()
export class Collection {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(type => User, user => user.collections)
    user: User;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    age: number;

    @Column()
    phoneNumber: string;

    @Column()
    mailingAddres: string;

    @Column()
    amount: string;

    @Column()
    remainingBalance: string;

    @Column()
    description: string;

    @Column()
    email: string;
}