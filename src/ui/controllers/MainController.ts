import { Request, Response } from "express";
import { controller, httpGet, request, requestParam, response } from "inversify-express-utils";
import { join, resolve } from "path";
import { ensureAuthenticated } from "../../infrastructure/bootstrapping/middleware";

@controller("/", ensureAuthenticated)
export class MainController {

    @httpGet("/")
    public async get(@response() res: Response, @request() req: Request) {

        // res.sendFile("../infrastructure/bootstrapping/build/index.html");
        // res.sendFile(process.cwd() + "/client/build/index.html");
    }
}
