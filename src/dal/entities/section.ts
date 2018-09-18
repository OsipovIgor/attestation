import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { BaseEntity } from "./baseEntity";
import { Knowledge } from "./knowledge";
import { Platform } from "./platform";

@Entity("sections", { schema: "public" })
export class Section extends BaseEntity {

    @Column("character varying", {
        nullable: false,
        length: 50,
        name: "name",
    })
    public name: string;

    @ManyToOne(type => Platform, platform => platform.sections, { onDelete: "CASCADE", onUpdate: "CASCADE" })
    @JoinColumn({ name: "platform_id" })
    public platform: Platform;

    @OneToMany(type => Knowledge, knowledge => knowledge.section)
    public knowledges: Knowledge[];
}
