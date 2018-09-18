import { Column, Entity, JoinColumn, ManyToOne, OneToMany} from "typeorm";
import { Answer } from "./answer";
import { BaseEntity } from "./baseEntity";
import { Section } from "./section";

/**
 * Знания
 */
@Entity("knowledges", { schema: "public" })
export class Knowledge extends BaseEntity {
    @Column("character varying", {
        nullable: false,
        length: 150,
        name: "name",
    })
    public name: string;

    @ManyToOne(type => Section, section => section.knowledges, { onDelete: "SET NULL", onUpdate: "SET NULL" })
    @JoinColumn({ name: "section_id" })
    public section: Section;

    @OneToMany(type => Answer, answer => answer.knowledge)
    public answers: Answer[];
}
