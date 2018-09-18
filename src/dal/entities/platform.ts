import {
    Column,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
} from "typeorm";
import { BaseEntity } from "./baseEntity";
import { Section } from "./section";
import { User } from "./user";

@Entity("platforms", { schema: "public" })
export class Platform extends BaseEntity {

    @PrimaryGeneratedColumn()
    public id: number;

    @Column("text", {
        nullable: false,
        name: "name",
        unique: true,
    })
    public name: string;

    @OneToMany(type => Section, sections => sections.platform)
    public sections: Section[];

    @OneToMany(type => User, users => users.platform)
    public users: User[];
}
