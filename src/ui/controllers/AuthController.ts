import { Request, Response } from "express";
import { controller, httpGet, request, response } from "inversify-express-utils";
import { authenticate } from "passport";
import { authorized } from "../../infrastructure/bootstrapping/middleware";

@controller("/auth", authorized)
export class AuthController {

    @httpGet("/", authenticate("google", {
        scope: [
            "https://www.googleapis.com/auth/plus.login",
            "https://www.googleapis.com/auth/plus.profile.emails.read",
        ],
    }))

    @httpGet("/callback", authenticate("google", {
        successRedirect: "/",
        failureRedirect: "/auth/login",
    }))
    // tslint:disable-next-line:no-empty
    public loginCallback() { }

    @httpGet("/login")
    public login(@response() res: Response) {
        res.render("login");
    }

    @httpGet("/logout")
    public logout(@response() res: Response, @request() req: Request) {
        req.logout();
        res.redirect("/auth/login");
    }
}
