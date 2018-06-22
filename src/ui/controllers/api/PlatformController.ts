import { Request, Response } from "express";
import { inject } from "inversify";
import { controller, httpDelete, httpGet, httpPost, request, requestParam, response } from "inversify-express-utils";

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

    /**
     * Изменить название платформы
     *
     * @param {Response} res
     * @param {Request} req
     * @returns
     * @memberof PlatformController
     */
    @httpPost("/rename")
    public async rename(@response() res: Response, @request() req: Request) {
        try {
            return await this._platformRepository.rename(req.body.id, req.body.name);
        } catch (e) {
            res.status(400).send({ error: e.message });
        }
    }


    /**
     * Удаление платформы
     *
     * @param {Response} res
     * @param {number} id
     * @returns
     * @memberof PlatformController
     */
    @httpDelete("/:id")
    public async remove(@response() res: Response, @requestParam("id") id: number) {
        try {
            return await this._platformRepository.remove(id);
        } catch (e) {
            res.status(400).send({ error: e.message });
        }

    }

}
