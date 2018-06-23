import { Request, Response } from "express";
import { controller, httpGet, request, requestParam, response } from "inversify-express-utils";
import { resolve } from "path";
import { ensureAuthenticated } from "../../infrastructure/bootstrapping/middleware";

@controller("/", ensureAuthenticated)
export class MainController {

    @httpGet("/")
    public async get(@response() res: Response, @request() req: Request) {
        res.sendFile(resolve(process.cwd(), "client", "build", "index.html"));
    }
}
