import { injectable } from "inversify";
import { EntityManager } from "typeorm";
import { dbClient } from "../domain/constants/decorators";
import { TYPES } from "../domain/constants/types";
import { IManager } from "../domain/interfaces/manager";
import { DbClient } from "./db_client";
import { PlatformEntity, UserEntity, SectionEntity } from "./entities.index";

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

    /**
     * Получить данные по разделам
     * @param {number} platformId
     * @returns {Promise<Section[]>}
     */
    public async getAllSections(platformId: number) {
        try {
            return await this.manager.getRepository(SectionEntity).createQueryBuilder("section")
                .where("section.platform_id = :platformId", {platformId})
                .orderBy("section.id", "DESC")
                .getMany();
        } catch (e) {
            throw e;
        }
    }
}
