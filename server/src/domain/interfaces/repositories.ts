import { Answers, Knowledges, Platforms, Sections, Users } from "../models";

export interface IRepository<T> {
    getAll(): Promise<T[]>;
    getById(id: number): Promise<T>;
}

export interface IUsersRepository extends IRepository<Users> {
    getByGoogleId(id: string): Promise<Users>;
    createUser(user: Users): Promise<Users>;
}

export interface IPlatformsRepository extends IRepository<Platforms> { }
export interface IKnowledgesRepository extends IRepository<Knowledges> { }
export interface ISectionsRepository extends IRepository<Sections> { }
export interface IAnswersRepository extends IRepository<Answers> { }
