import * as bodyParser from "body-parser";
import * as cookieParser from "cookie-parser";
import * as express from "express";
import * as expressSession from "express-session";
import * as helmet from "helmet";
import { deserializeUser, initialize, serializeUser, session, use } from "passport";
import { OAuth2Strategy } from "passport-google-oauth";
import { join } from "path";
import { sessionConfig } from "../../configs";
import { exceptionLoggerMiddleware } from "./middleware";
import { google } from "./strategies/google";

/**
 * Конфигурация сервера
 *
 * @export
 * @param {Application} app
 */
export function configCallback(app: express.Application) {
    use(google);

    app.use(express.static(join(__dirname, "build")));
    app.use((req, res, next) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });

    app.set("views",  __dirname + "/views");
    app.set("view engine", "jsx");
    app.engine("jsx", require("express-react-views").createEngine());

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
export function errorConfigCallback(app: express.Application) {
    app.use(exceptionLoggerMiddleware);
}
