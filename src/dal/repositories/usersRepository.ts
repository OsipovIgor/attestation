import { inject, injectable } from "inversify";
import { Repository as TypeOrmRepository } from "typeorm";

import { DbClient } from "../db_client";
import { Repository } from "./repository";

import { dbClient } from "../../domain/constants/decorators";
import { TYPES } from "../../domain/constants/types";
import { IPlatformsRepository, IUserRepository } from "../../domain/interfaces/repositories";
import { User } from "../../domain/models";
import { UserDataMapper } from "../dataMappers/userDataMapper";
import { UserEntity } from "../entities";

@injectable()
export class UserRepository extends Repository<User, UserEntity> implements IUserRepository {

  public constructor(@dbClient client: DbClient) {
    super(client.getRepository(UserEntity), new UserDataMapper());
  }

  public async getByGoogleId(googleId: string): Promise<User> {
    const user = await this._repository.findOne({ googleId });
    return this._dataMapper.toDomain(user);
  }

  public async createUser(user: User): Promise<User> {
    const newUser = new UserEntity();
    newUser.googleId = user.googleId;
    newUser.accessToken = user.accessToken;
    newUser.email = user.email;
    newUser.name = user.name;
    newUser.surname = user.surname;
    await this._repository.save(newUser);

    return this._dataMapper.toDomain(newUser);
  }
}
