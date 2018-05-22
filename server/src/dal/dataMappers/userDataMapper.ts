import { User } from "../../domain/models";
import { UserEntity } from "../entities";
import { IEntityDataMapper } from "../interfaces/EntityDataMapper";

export class UserDataMapper implements IEntityDataMapper<User, UserEntity> {
    public toDomain(entity: UserEntity): User {
        if (!entity) { return null; }
        return {
            accessToken: entity.accessToken,
            email: entity.email,
            googleId: entity.googleId,
            name: entity.name,
            surname: entity.surname,
        };
    }
    public toDalEntity(domain: User): UserEntity {
        throw new Error("Method not implemented.");
    }
}
