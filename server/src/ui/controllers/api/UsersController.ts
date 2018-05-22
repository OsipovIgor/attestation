import { Request, Response } from "express";
import { inject } from "inversify";
import { controller, httpGet, request, requestParam, response } from "inversify-express-utils";

import { TYPES } from "../../../domain/constants/types";
import { IUsersRepository } from "../../../domain/interfaces/repositories";
import { ensureAuthenticated } from "../../../infrastructure/bootstrapping/middleware";

@controller("/api/users", ensureAuthenticated)
export class UsersController {

    // tslint:disable-next-line:variable-name
    @inject(TYPES.UsersRepository) private readonly _userRepository: IUsersRepository;

    @httpGet("/")
    public async get(@response() res: Response, @request() req: Request) {
        try {
            const a = req.user;

            return await this._userRepository.getAll();
        } catch (e) {
            res.status(500).send({ error: e.message });
        }
    }

    @httpGet("/:id")
    public async getById(@response() res: Response, @requestParam("id") id: number) {
        try {
            return await this._userRepository.getById(id);
        } catch (e) {
            res.status(500).send({ error: e.message });
        }
    }
}
