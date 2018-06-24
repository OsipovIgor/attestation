import { Request, Response } from "express";
import { inject } from "inversify";
import { controller, httpDelete, httpGet, httpPost, request, requestParam, response } from "inversify-express-utils";

import { TYPES } from "../../../domain/constants/types";
import { ensureAuthenticated } from "../../../infrastructure/bootstrapping/middleware";
import { ISectionsRepository} from "@domain/interfaces/repositories";
import { IManager } from "@domain/interfaces/manager";

@controller("/api/section"/*, ensureAuthenticated*/)
export class SectionController {

    @inject(TYPES.SectionRepository) private readonly _sectionRepository: ISectionsRepository;
    @inject(TYPES.Manager) private readonly _manager: IManager;

    @httpGet("/:platformId")
    public async getByPlatformId(@response() res: Response, @request() req: Request) {
        try {
            return await this._sectionRepository.getAll();
        } catch (e) {
            res.status(400).send({ error: e.message });
        }
    }

    /**
     * Создать новый раздел
     *
     * @param {Response} res
     * @param {Request} req
     * @returns
     * @memberof SectionController
     */
    @httpPost("/create")
    public async create(@response() res: Response, @request() req: Request) {
        try {
            return await this._sectionRepository.create(req.body.platformId, req.body.name);
        } catch (e) {
            res.status(400).send({ error: e.message });
        }
    }
}