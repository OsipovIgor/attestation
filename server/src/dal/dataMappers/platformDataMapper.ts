import { Platform } from "../../domain/models";
import { PlatformEntity } from "../entities";
import { IEntityDataMapper } from "../interfaces/EntityDataMapper";

export class PlatformDataMapper implements IEntityDataMapper<Platform, PlatformEntity> {
    public toDomain(entity: PlatformEntity): Platform {
        throw new Error("Method not implemented.");
    }
    public toDalEntity(domain: Platform): PlatformEntity {
        throw new Error("Method not implemented.");
    }
}
