import { ContainerModule } from "inversify";
import { registerController } from "./infrastructure/ioc/utils";

// Controllers
import { UserRepository } from "./dal/repositories/usersRepository";
import { TYPES } from "./domain/constants/types";
import { IUserRepository } from "./domain/interfaces/repositories";

import "./ui/controllers/api/UsersController";
import "./ui/controllers/AuthController";

export const referenceDataIoCModule = new ContainerModule((bind) => {

    bind<IUserRepository>(TYPES.UserRepository).to(UserRepository).inSingletonScope();

});
