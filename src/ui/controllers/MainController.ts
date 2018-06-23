import { NextFunction, Request, Response } from "express";
import { controller, httpGet, next, request, requestParam, response } from "inversify-express-utils";
import { join, resolve } from "path";
import { ensureAuthenticated } from "../../infrastructure/bootstrapping/middleware";

@controller("/", ensureAuthenticated)
export class MainController {

    @httpGet("/")
    public async get(@response() res: Response, @request() req: Request, @next() next: NextFunction) {
        res.sendFile(join(__dirname, "build", "index.html"));
    }
}
