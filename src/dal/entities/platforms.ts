import { Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn } from "typeorm";
import { Section } from "./sections";
import { User } from "./users";

@Entity("platforms", { schema: "public" })
export class Platform {

    @Column("integer", {
        generated: true,
        nullable: false,
        primary: true,
        name: "id",
    })
    public id: number;

    @Column("text", {
        nullable: false,
        name: "name",
    })
    public name: string;

    @OneToMany((type) => Section, (sections) => sections.platformId)
    public sections: Section[];

    @OneToMany((type) => User, (users) => users.platformId)
    public users: User[];

    constructor(init?: Partial<Platform>) {
        Object.assign(this, init);
    }
}
