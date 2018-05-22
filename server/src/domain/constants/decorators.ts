import { inject } from "inversify";
import { TYPES } from "./types";

export const dbClient = inject(TYPES.DbClient);
export const userRepository = inject(TYPES.UsersRepository);
