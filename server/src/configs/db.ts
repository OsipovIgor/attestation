import { DbSettings } from "../domain/constants/types";

/**
 * Настройки базы данных
 */
export const dbSettings: DbSettings = {
    database: process.env.DBNAME,
    username: process.env.DBUSER,
    host: process.env.DBHOST,
    password: process.env.DBPASSWORD,
    port: +process.env.DBPORT,
};
