import { Answer, Knowledge, Platform, Section, User } from "../models";

export interface IRepository<T> {
    getAll(): Promise<T[]>;
    getById(id: number): Promise<T>;
}

export interface IUserRepository extends IRepository<User> {
    getByGoogleId(id: string): Promise<User>;
    createUser(user: User): Promise<User>;
}

export interface IPlatformsRepository extends IRepository<Platform> { }
export interface IKnowledgesRepository extends IRepository<Knowledge> { }
export interface ISectionsRepository extends IRepository<Section> { }
export interface IAnswersRepository extends IRepository<Answer> { }
