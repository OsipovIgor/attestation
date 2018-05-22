import { Connection, createConnection } from "typeorm";
import { DbSettings } from "../domain/constants/types";
import { AnswersEntity, KnowledgesEntity, PlatformsEntity, SectionsEntity, UsersEntity } from "./entities";

export type DbClient = Connection;

export async function getDatabaseConnection(settings: DbSettings) {

    const entities = [
        AnswersEntity,
        KnowledgesEntity,
        PlatformsEntity,
        SectionsEntity,
        UsersEntity,
    ];
    return await createConnection({
        type: "postgres",
        entities,
        synchronize: false,
        ...settings,
    });

}
