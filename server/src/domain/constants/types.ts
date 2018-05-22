export const TYPES = {
    App: Symbol("App"),
    DbClient: Symbol("DbClient"),
    UserRepository: Symbol("UserRepository"),
    PlatformRepository: Symbol("PlatformRepository"),
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
