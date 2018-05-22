import { Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn } from "typeorm";
import { Answers } from "./answers";

/**
 * Пользователи
 */
@Entity("users", { schema: "public" })
@Index("users_access_token_uindex", ["accessToken"], { unique: true })
@Index("users_email_uindex", ["email"], { unique: true })
@Index("users_googleid_uindex", ["googleId"], { unique: true })
export class Users {

    @Column("integer", {
        generated: true,
        nullable: false,
        primary: true,
        name: "id",
    })
    public id: number;

    @Column("character varying", {
        nullable: false,
        length: 60,
        name: "email",
    })
    public email: string;

    @Column("character varying", {
        nullable: false,
        length: 50,
        name: "google_id",
    })
    public googleId: string;

    @Column("character varying", {
        nullable: false,
        length: 255,
        name: "access_token",
    })
    public accessToken: string;

    @Column("character varying", {
        nullable: false,
        length: 55,
        name: "name",
    })
    public name: string;

    @Column("character varying", {
        nullable: true,
        length: 55,
        name: "surname",
    })
    public surname: string;

    @OneToMany((type) => Answers, (answers) => answers.userId)
    public answers: Answers[];

    constructor(init?: Partial<Users>) {
        Object.assign(this, init);
    }
}
