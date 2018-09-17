import { Platform } from "../../domain/models";
import { PlatformEntity } from "../entities.index";
import { IEntityDataMapper } from "../interfaces/EntityDataMapper";

export class PlatformDataMapper implements IEntityDataMapper<Platform, PlatformEntity> {
    public toDomain(entity: PlatformEntity): Platform {
        return { name: entity.name, id: entity.id };
    }
    public toDalEntity(domain: Platform): PlatformEntity {
        throw new Error("Method not implemented.");
    }
}
