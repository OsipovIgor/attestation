import { Connection, createConnection } from "typeorm";

export type DbClient = Connection;

export async function getDatabaseConnection() {
    return await createConnection();

}
