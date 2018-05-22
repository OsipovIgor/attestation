export const TYPES = {
    App: Symbol("App"),
    DbClient: Symbol("DbClient"),
    UsersRepository: Symbol("UserRepository"),
};

/**
 * Настройки для базы данных
 */
export type DbSettings = {
    host: string,
    port: number,
    username: string,
    password: string,
    database: string,
};
