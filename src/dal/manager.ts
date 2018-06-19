import { injectable } from "inversify";
import { EntityManager } from "typeorm";
import { dbClient } from "../domain/constants/decorators";
import { TYPES } from "../domain/constants/types";
import { IManager } from "../domain/interfaces/manager";
import { DbClient } from "./db_client";
import { PlatformEntity, UserEntity } from "./entities";

@injectable()
export class Manager implements IManager {

    public manager: EntityManager;

    public constructor(@dbClient client: DbClient) {
        this.manager = client.manager;
    }

    /**
     * Привязать пользователя к платформе
     * @param userId {ID пользователя}
     * @param platformId {ID платформы}
     */
    public async bindUser(userId: number, platformId: number) {
        try {
            const user = await this.manager.findOneOrFail(UserEntity, userId);
            const platform = await this.manager.findOneOrFail(PlatformEntity, platformId);

            user.platformId = platform;
            await this.manager.save(user);
        } catch (e) {
            throw e;
        }

    }
}
