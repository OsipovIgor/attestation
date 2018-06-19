import { Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn } from "typeorm";
import { Knowledge } from "./knowledges";
import { Platform } from "./platforms";

@Entity("sections", { schema: "public" })
export class Section {

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

    @ManyToOne((type) => Platform, (platformId) => platformId.sections, { onDelete: "CASCADE", onUpdate: "CASCADE" })
    @JoinColumn({ name: "platform_id" })
    public platformId: Platform;

    @OneToMany((type) => Knowledge, (knowledges) => knowledges.sectionId)
    public knowledges: Knowledge[];

    constructor(init?: Partial<Section>) {
        Object.assign(this, init);
    }
}
