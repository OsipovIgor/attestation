import { Application } from "express";
import { Container, ContainerModule } from "inversify";
import { InversifyExpressServer } from "inversify-express-utils";
import { deserializeUser, serializeUser } from "passport";

import { DbSettings, TYPES } from "../../domain/constants/types";

import { DbClient, getDatabaseConnection } from "../../dal/db_client";
import { configCallback, errorConfigCallback } from "./config";

export async function bootstrap(container: Container, appPort: number, dbSettings: DbSettings, ...modules: ContainerModule[]) {
    if (container.isBound(TYPES.App) === false) {
        try {
            serializeUser((user, cb) => cb(null, user));
            deserializeUser((obj, cb) => cb(null, obj));

            const dbClient = await getDatabaseConnection(dbSettings);
            container.bind<DbClient>(TYPES.DbClient).toConstantValue(dbClient);
            container.load(...modules);

            const server = new InversifyExpressServer(container);

            server.setConfig(configCallback);
            server.setErrorConfig(errorConfigCallback);

            const app = server.build();

            console.log(`Application listening on port ${appPort}...`);
            app.listen(appPort);

            container.bind<Application>(TYPES.App).toConstantValue(app);

            return app;
        } catch (e) {
            throw new Error(e);
        }

    } else {
        return container.get<Application>(TYPES.App);
    }

}
