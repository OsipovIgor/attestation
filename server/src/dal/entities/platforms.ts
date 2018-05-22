import { Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn } from "typeorm";
import { Sections } from "./sections";

@Entity("platforms", { schema: "public" })
export class Platforms {

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

    @OneToMany((type) => Sections, (sections) => sections.platformId)
    public sections: Sections[];

    constructor(init?: Partial<Platforms>) {
        Object.assign(this, init);
    }
}
