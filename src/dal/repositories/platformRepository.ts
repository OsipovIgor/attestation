import { injectable } from "inversify";

import { DbClient } from "../db_client";
import { Repository } from "./repository";

import { dbClient } from "../../domain/constants/decorators";
import { IPlatformsRepository } from "../../domain/interfaces/repositories";
import { Platform } from "../../domain/models";
import { PlatformDataMapper } from "../dataMappers/platformDataMapper";
import { PlatformEntity } from "../entities";

@injectable()
export class PlatformRepository extends Repository<Platform, PlatformEntity> implements IPlatformsRepository {

    public constructor(@dbClient client: DbClient) {
        super(client.getRepository(PlatformEntity), new PlatformDataMapper());
    }

    public async create(name: string) {
        if (!name || typeof name !== "string") {
            throw new Error("Invalid JSON or empty string.");
        }
        const ERROR = "Карта с таким именем уже существует";
        try {
            await this._repository.findOneOrFail({ name });
            throw new Error(ERROR);
        } catch (e) {
            if (e.message !== ERROR) {
                const platform = new PlatformEntity();
                platform.name = name;
                await this._repository.save(platform);
            } else {
                throw new Error(ERROR);
            }
        }
    }

}
