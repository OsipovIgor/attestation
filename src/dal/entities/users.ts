import {
    Column,
    Entity,
    Index,
    JoinColumn,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
} from "typeorm";
import { Answer } from "./answers";
import { Platform } from "./platforms";

/**
 * Пользователи
 */
@Entity("users", { schema: "public" })
@Index("users_access_token_uindex", ["accessToken"], { unique: true })
@Index("users_email_uindex", ["email"], { unique: true })
@Index("users_googleid_uindex", ["googleId"], { unique: true })
export class User {

    @PrimaryGeneratedColumn()
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

    @ManyToOne((type) => Platform, (platformId) => platformId.users, { nullable: true, onDelete: "CASCADE", onUpdate: "CASCADE" })
    @JoinColumn({ name: "platform_id" })
    public platformId: Platform;

    @OneToMany((type) => Answer, (answers) => answers.userId)
    public answers: Answer[];

    constructor(init?: Partial<User>) {
        Object.assign(this, init);
    }
}
