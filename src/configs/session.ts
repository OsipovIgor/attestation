import { RedisStoreOptions } from "connect-redis";
import { SessionOptions } from "express-session";

const options: RedisStoreOptions = {
    host: "redis-12761.c9.us-east-1-4.ec2.cloud.redislabs.com",
    pass: "",
    port: 12761,
};

export const sessionConfig: SessionOptions = {
    // store: new RedisStore(options),
    resave: false,
    saveUninitialized: true,
    secret: "LlUU5yoI8mJSe8lFPVpPbG1jly8PIQTi6bj2QDYS",
};
