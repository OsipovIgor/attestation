import { inject, injectable } from "inversify";
import { Repository as TypeOrmRepository } from "typeorm";

import { DbClient } from "../db_client";
import { Repository } from "./repository";

import { dbClient } from "../../domain/constants/decorators";
import { TYPES } from "../../domain/constants/types";
import { IPlatformsRepository } from "../../domain/interfaces/repositories";
import { Platform } from "../../domain/models";
import { PlatformDataMapper } from "../dataMappers/platformDataMapper";
import { PlatformEntity } from "../entities";

@injectable()
export class PlatformRepository extends Repository<Platform, PlatformEntity> implements IPlatformsRepository {

    public constructor(@dbClient client: DbClient) {
        super(client.getRepository(PlatformEntity), new PlatformDataMapper());
    }
}
