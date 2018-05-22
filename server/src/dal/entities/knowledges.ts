import { Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn } from "typeorm";
import { Answers } from "./answers";
import { Sections } from "./sections";

@Entity("knowledges", { schema: "public" })
export class Knowledges {

    @Column("integer", {
        generated: true,
        nullable: false,
        primary: true,
        name: "id",
    })
    public id: number;

    @Column("character varying", {
        nullable: false,
        length: 150,
        name: "name",
    })
    public name: string;

    @ManyToOne((type) => Sections, (sectionId) => sectionId.knowledges, { onDelete: "SET NULL", onUpdate: "SET NULL" })
    @JoinColumn({ name: "section_id" })
    public sectionId: Sections;

    @OneToMany((type) => Answers, (answers) => answers.knowledgeId)
    public answers: Answers[];

    constructor(init?: Partial<Knowledges>) {
        Object.assign(this, init);
    }
}
