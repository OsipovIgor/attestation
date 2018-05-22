import { Request, Response } from "express";
import { inject } from "inversify";
import { controller, httpGet, request, requestParam, response } from "inversify-express-utils";

import { TYPES } from "../../../domain/constants/types";
import { IUserRepository } from "../../../domain/interfaces/repositories";
import { ensureAuthenticated } from "../../../infrastructure/bootstrapping/middleware";

@controller("/api/users"/*, ensureAuthenticated*/)
export class UsersController {

    @inject(TYPES.UserRepository) private readonly _userRepository: IUserRepository;

    @httpGet("/")
    public async get(@response() res: Response, @request() req: Request) {
        try {
            return await this._userRepository.getAll();
        } catch (e) {
            res.status(400).send({ error: e.message });
        }
    }

    @httpGet("/:id")
    public async getById(@response() res: Response, @requestParam("id") id: number) {
        try {
            return await this._userRepository.getById(id);
        } catch (e) {
            res.status(400).send({ error: e.message });
        }
    }
}
