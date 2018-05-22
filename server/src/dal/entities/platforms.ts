import { Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn } from "typeorm";
import { Section } from "./sections";

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

    constructor(init?: Partial<Platform>) {
        Object.assign(this, init);
    }
}
