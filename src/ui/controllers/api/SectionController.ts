import { Request, Response } from "express";
import { inject } from "inversify";
import { controller, httpDelete, httpGet, httpPost, request, requestParam, response } from "inversify-express-utils";

import { TYPES } from "../../../domain/constants/types";
import { ensureAuthenticated } from "../../../infrastructure/bootstrapping/middleware";

@controller("/api/section"/*, ensureAuthenticated*/)
export class SectionController {

    @httpGet("/:platformId")
    public async getByPlatformId(@response() res: Response, @request() req: Request) {
        try {
            console.log("awd");
        } catch (e) {
            res.status(400).send({ error: e.message });
        }
    }
}