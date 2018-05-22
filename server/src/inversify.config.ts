import { ContainerModule } from "inversify";
import { registerController } from "./infrastructure/ioc/utils";

// Controllers
import { UsersRepository } from "./dal/repositories/usersRepository";
import { TYPES } from "./domain/constants/types";
import { IUsersRepository } from "./domain/interfaces/repositories";

import "./ui/controllers/api/UsersController";
import "./ui/controllers/AuthController";

export const referenceDataIoCModule = new ContainerModule((bind) => {

    bind<IUsersRepository>(TYPES.UsersRepository).to(UsersRepository).inSingletonScope();

});
