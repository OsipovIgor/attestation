import { Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn } from "typeorm";
import { Knowledges } from "./knowledges";
import { Platforms } from "./platforms";

@Entity("sections", { schema: "public" })
export class Sections {

    @Column("integer", {
        generated: true,
        nullable: false,
        primary: true,
        name: "id",
    })
    public id: number;

    @Column("character varying", {
        nullable: false,
        length: 50,
        name: "name",
    })
    public name: string;

    @ManyToOne((type) => Platforms, (platformId) => platformId.sections, { onDelete: "CASCADE", onUpdate: "CASCADE" })
    @JoinColumn({ name: "platform_id" })
    public platformId: Platforms;

    @OneToMany((type) => Knowledges, (knowledges) => knowledges.sectionId)
    public knowledges: Knowledges[];

    constructor(init?: Partial<Sections>) {
        Object.assign(this, init);
    }
}
