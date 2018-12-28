import { ContainerModule } from "inversify";
import { registerController } from "./infrastructure/ioc/utils";

import { Manager } from "./dal/manager";
import { PlatformRepository } from "./dal/repositories/platformRepository";
import { SectionRepository } from "./dal/repositories/sectionRepository";
import { UserRepository } from "./dal/repositories/usersRepository";

import { TYPES } from "./domain/constants/types";

import { IManager } from "./domain/interfaces/manager";
import { IPlatformsRepository, ISectionsRepository, IUserRepository } from "./domain/interfaces/repositories";

// Controllers
import "./ui/controllers/api/PlatformController";
import "./ui/controllers/api/SectionController";
import "./ui/controllers/api/UsersController";
import "./ui/controllers/AuthController";
// import "./ui/controllers/MainController";

export const referenceDataIoCModule = new ContainerModule((bind) => {

    bind<IUserRepository>(TYPES.UserRepository).to(UserRepository).inSingletonScope();
    bind<IPlatformsRepository>(TYPES.PlatformRepository).to(PlatformRepository).inSingletonScope();
    bind<ISectionsRepository>(TYPES.SectionRepository).to(SectionRepository).inSingletonScope();

    bind<IManager>(TYPES.Manager).to(Manager).inSingletonScope();
});
