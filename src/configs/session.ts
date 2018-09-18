import * as connectRedis from "connect-redis";
import * as expressSession from "express-session";

const RedisStore = connectRedis(expressSession);

export const sessionConfig = {
    store: new RedisStore({ host: process.env.REDISHOST, port: parseInt(process.env.REDISPORT, 10) }),
    resave: false,
    saveUninitialized: true,
    secret: "LlUU5yoI8mJSe8lFPVpPbG1jly8PIQTi6bj2QDYS",
};
