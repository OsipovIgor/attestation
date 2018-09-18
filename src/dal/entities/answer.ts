import { Column, Entity, JoinColumn, ManyToOne} from "typeorm";
import { BaseEntity } from "./baseEntity";
import { Knowledge } from "./knowledge";
import { User } from "./user";

/**
 * Ответы
 */
@Entity("answers", { schema: "public" })
export class Answer extends BaseEntity {

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

    @ManyToOne(type => User, user => user.answers, { nullable: false, onDelete: "CASCADE", onUpdate: "CASCADE" })
    @JoinColumn({ name: "user_id" })
    public user: User;

    @ManyToOne(type => Knowledge, knowledge => knowledge.answers, { nullable: false, onDelete: "CASCADE", onUpdate: "CASCADE" })
    @JoinColumn({ name: "knowledge_id" })
    public knowledge: Knowledge;

}
