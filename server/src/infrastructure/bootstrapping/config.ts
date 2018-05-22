import * as bodyParser from "body-parser";
import * as cookieParser from "cookie-parser";
import { Application } from "express";
import * as expressSession from "express-session";
import * as helmet from "helmet";
import { deserializeUser, initialize, serializeUser, session, use } from "passport";
import { OAuth2Strategy } from "passport-google-oauth";

import { sessionConfig } from "../../configs";
import { exceptionLoggerMiddleware } from "./middleware";
import { google } from "./strategies/google";

/**
 * Конфигурация сервера
 *
 * @export
 * @param {Application} app
 */
export function configCallback(app: Application) {
    use(google);

    app.use(cookieParser());

    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    app.use(expressSession(sessionConfig));

    app.use(initialize());
    app.use(session());
}

/**
 * Конфигурация сервера, если падает в Exception
 *
 * @export
 * @param {Application} app
 */
export function errorConfigCallback(app: Application) {
    app.use(exceptionLoggerMiddleware);
}
