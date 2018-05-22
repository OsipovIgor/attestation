import { Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn } from "typeorm";
import { Knowledges } from "./knowledges";
import { Users } from "./users";

/**
 * Ответы
 */
@Entity("answers", { schema: "public" })
export class Answers {

    @Column("integer", {
        generated: true,
        nullable: false,
        primary: true,
        name: "id",
    })
    public id: number;

    @Column("boolean", {
        nullable: false,
        name: "know",
    })
    public know: boolean;

    @Column("boolean", {
        nullable: false,
        name: "apply",
    })
    public apply: boolean;

    @Column("boolean", {
        nullable: false,
        name: "want_learn",
    })
    public wantLearn: boolean;

    @ManyToOne((type) => Users, (userId) => userId.answers, { nullable: false, onDelete: "CASCADE", onUpdate: "CASCADE" })
    @JoinColumn({ name: "user_id" })
    public userId: Users;

    @ManyToOne((type) => Knowledges, (knowledgeId) => knowledgeId.answers, { nullable: false, onDelete: "CASCADE", onUpdate: "CASCADE" })
    @JoinColumn({ name: "knowledge_id" })
    public knowledgeId: Knowledges;

    constructor(init?: Partial<Answers>) {
        Object.assign(this, init);
    }
}
