import { Request, Response } from "express";
import { inject } from "inversify";
import { controller, httpGet, httpPost, request, requestParam, response } from "inversify-express-utils";

import { TYPES } from "../../../domain/constants/types";

import { IPlatformsRepository } from "../../../domain/interfaces/repositories";
import { ensureAuthenticated } from "../../../infrastructure/bootstrapping/middleware";

@controller("/api/platform", ensureAuthenticated)
export class PlatformController {

    @inject(TYPES.PlatformRepository) private readonly _platformRepository: IPlatformsRepository;

    /**
     * Получить список платформ
     *
     * @param {Response} res
     * @param {Request} req
     * @returns
     * @memberof PlatformController
     */
    @httpGet("/all")
    public async all(@response() res: Response, @request() req: Request) {
        try {
            return await this._platformRepository.getAll();
        } catch (e) {
            res.status(400).send({ error: e.message });
        }
    }

    /**
     * Создать новую платформу
     *
     * @param {Response} res
     * @param {Request} req
     * @returns
     * @memberof PlatformController
     */
    @httpPost("/create")
    public async create(@response() res: Response, @request() req: Request) {
        try {
            return await this._platformRepository.create(req.body.name);
        } catch (e) {
            res.status(400).send({ error: e.message });
        }
    }

}
