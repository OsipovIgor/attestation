import {
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    OneToMany,
    } from "typeorm";
import { Answer } from "./answer";
import { BaseEntity } from "./baseEntity";
import { Platform } from "./platform";

/**
 * Пользователи
 */
@Entity("users", { schema: "public" })
export class User extends BaseEntity {

    @Column("character varying", {
        nullable: false,
        length: 60,
        name: "email",
        unique: true,
    })
    public email: string;

    @Column("character varying", {
        nullable: false,
        length: 50,
        name: "google_id",
        unique: true,
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

    @ManyToOne(type => Platform, platform => platform.users, { nullable: true, onDelete: "CASCADE", onUpdate: "CASCADE" })
    @JoinColumn({ name: "platform_id" })
    public platform: Platform;

    @OneToMany(type => Answer, answer => answer.user)
    public answers: Answer[];
}
