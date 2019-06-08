import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Collection } from "./collection";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToMany(type => Collection, collection => collection.user)
    collections: Collection[];

    @Column()
    businessName: string;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    phoneNumber: string;

    @Column()
    mailingAddress: string;

    @Column()
    depositAccount: string;
}