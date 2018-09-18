import { injectable } from "inversify";

import { dbClient } from "../../domain/constants/decorators";
import { ISectionsRepository} from "../../domain/interfaces/repositories";
import { Section } from "../../domain/models";
import { DbClient } from "../db_client";
import { Repository } from "./repository";

import { SectionDataMapper } from "../dataMappers/sectionDataMapper";
import { SectionEntity} from "../entities.index";

@injectable()
export class SectionRepository extends Repository<Section, SectionEntity> implements ISectionsRepository {
    public constructor(@dbClient client: DbClient) {
        super(client.getRepository(SectionEntity), new SectionDataMapper());
    }

    public async create(platformId: number, name: string) {
        if (!name) {
            throw new Error("Invalid JSON or empty string.");
        }
        const ERROR = "Раздел с таким именем уже существует";
        try {
            const section = await this._repository
                .createQueryBuilder("section")
                .where("section.name = :name", { name })
                .andWhere("section.platform_id = :platformId", { platformId })
                .getOne();
        } catch (e) {
            if (e.message !== ERROR) {
                const section = new SectionEntity();
                section.platform.id = platformId;
                section.name = name;
                await this._repository.save(section);
            } else {
                throw new Error(ERROR);
            }
        }
    }

    public async getByPlatformId(platformId: number): Promise<Section> {
        return undefined;
    }

    public async remove(sectionId: number) {
    }

    public async rename(sectionId: number, name: string) {
    }
}
