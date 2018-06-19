import { SessionOptions } from "express-session";

export const sessionConfig: SessionOptions = {
    resave: true,
    saveUninitialized: true,
    secret: "LlUU5yoI8mJSe8lFPVpPbG1jly8PIQTi6bj2QDYS",
};
