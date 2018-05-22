import { controller, httpGet, requestParam, response } from "inversify-express-utils";
import { authenticate, AuthenticateOptions } from "passport";

@controller("/auth")
export class AuthController {

    @httpGet("/", authenticate("google", {
        scope: [
            "https://www.googleapis.com/auth/plus.login",
            "https://www.googleapis.com/auth/plus.profile.emails.read",
        ],
    }))
    // tslint:disable-next-line:no-empty
    public login() { }

    @httpGet("/callback", authenticate("google", {
        successRedirect: "/success",
        failureRedirect: "login",
    }))
    // tslint:disable-next-line:no-empty
    public loginCallback() { }
}
