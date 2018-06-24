import { Section } from "../../domain/models";
import { SectionEntity } from "../entities";
import { IEntityDataMapper } from "../interfaces/EntityDataMapper";

export class SectionDataMapper implements IEntityDataMapper<Section, SectionEntity> {

    public toDalEntity(domain: Section): SectionEntity {
        throw new Error("Method not implemented.");
    }

    public toDomain(entity: SectionEntity): Section {
        throw new Error("Method not implemented.");
    }

}
