import { Users } from "../../domain/models";
import { UsersEntity } from "../entities";
import { IEntityDataMapper } from "../interfaces/EntityDataMapper";

export class UserDataMapper implements IEntityDataMapper<Users, UsersEntity> {
    public toDomain(entity: UsersEntity): Users {
        if (!entity) { return null; }
        return {
            accessToken: entity.accessToken,
            email: entity.email,
            googleId: entity.googleId,
            name: entity.name,
            surname: entity.surname,
        };
    }
    public toDalEntity(domain: Users): UsersEntity {
        throw new Error("Method not implemented.");
    }
}
