import { Request, Response } from "express";
import { controller, httpGet, request, requestParam, response } from "inversify-express-utils";
import { ensureAuthenticated } from "../../infrastructure/bootstrapping/middleware";

@controller("/", ensureAuthenticated)
export class MainController {

    @httpGet("/")
    public async get(@response() res: Response, @request() req: Request) {
        res.render("index", { name: "Petya" });
    }
}
