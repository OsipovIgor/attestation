import { Connection, createConnection } from "typeorm";
import { DbSettings } from "../domain/constants/types";
import { AnswerEntity, KnowledgeEntity, PlatformEntity, SectionEntity, UserEntity } from "./entities";

export type DbClient = Connection;

export async function getDatabaseConnection(settings: DbSettings) {

    const entities = [
        AnswerEntity,
        KnowledgeEntity,
        PlatformEntity,
        SectionEntity,
        UserEntity,
    ];
    return await createConnection({
        type: "postgres",
        entities,
        synchronize: false,
        ...settings,
    });

}
