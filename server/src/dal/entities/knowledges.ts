import { Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn } from "typeorm";
import { Answer } from "./answers";
import { Section } from "./sections";

@Entity("knowledges", { schema: "public" })
export class Knowledge {

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

    @ManyToOne((type) => Section, (sectionId) => sectionId.knowledges, { onDelete: "SET NULL", onUpdate: "SET NULL" })
    @JoinColumn({ name: "section_id" })
    public sectionId: Section;

    @OneToMany((type) => Answer, (answers) => answers.knowledgeId)
    public answers: Answer[];

    constructor(init?: Partial<Knowledge>) {
        Object.assign(this, init);
    }
}
