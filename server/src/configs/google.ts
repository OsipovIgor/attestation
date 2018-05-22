import { IOAuth2StrategyOptionWithRequest } from "passport-google-oauth";

export const googleSettings: IOAuth2StrategyOptionWithRequest = {
    clientID: process.env.GCLIENTID,
    clientSecret: process.env.GCLIENTSECRET,
    callbackURL: process.env.GCBURL,
    passReqToCallback: true,

};
