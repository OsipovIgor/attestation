import { Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn } from "typeorm";
import { Knowledge } from "./knowledges";
import { User } from "./users";

/**
 * Ответы
 */
@Entity("answers", { schema: "public" })
export class Answer {

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

    @ManyToOne((type) => User, (userId) => userId.answers, { nullable: false, onDelete: "CASCADE", onUpdate: "CASCADE" })
    @JoinColumn({ name: "user_id" })
    public userId: User;

    @ManyToOne((type) => Knowledge, (knowledgeId) => knowledgeId.answers, { nullable: false, onDelete: "CASCADE", onUpdate: "CASCADE" })
    @JoinColumn({ name: "knowledge_id" })
    public knowledgeId: Knowledge;

    constructor(init?: Partial<Answer>) {
        Object.assign(this, init);
    }
}
