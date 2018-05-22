import { inject, injectable } from "inversify";
import { Repository as TypeOrmRepository } from "typeorm";

import { DbClient } from "../db_client";
import { Repository } from "./repository";

import { dbClient } from "../../domain/constants/decorators";
import { TYPES } from "../../domain/constants/types";
import { IUsersRepository } from "../../domain/interfaces/repositories";
import { Users } from "../../domain/models";
import { UserDataMapper } from "../dataMappers/UserDataMapper";
import { UsersEntity } from "../entities";

@injectable()
export class UsersRepository extends Repository<Users, UsersEntity> implements IUsersRepository {

    public constructor(@dbClient client: DbClient) {
        super(client.getRepository(UsersEntity), new UserDataMapper());
    }

    public async getByGoogleId(googleId: string): Promise<Users> {
        const user = await this._repository.findOne({ googleId });
        return this._dataMapper.toDomain(user);
    }

    public async createUser(user: Users): Promise<Users> {
        const isInserted = await this._repository.insert(user);

        return user;
    }
}
