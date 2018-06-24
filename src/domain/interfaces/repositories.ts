import { Answer, Knowledge, Platform, Section, User } from "../models";

export interface IRepository<T> {
    getAll(): Promise<T[]>;
    getById(id: number): Promise<T>;
}

export interface IUserRepository extends IRepository<User> {
    getByGoogleId(id: string): Promise<User>;
    createUser(user: User): Promise<User>;
}

export interface IPlatformsRepository extends IRepository<Platform> {
    create(name: string): void;
    rename(id: number, name: string): void;
    remove(id: number): void;
 }
export interface IKnowledgesRepository extends IRepository<Knowledge> { }
export interface ISectionsRepository extends IRepository<Section> {
    getByPlatformId(platformId: number): Promise<Section>;
    create(platformId: number, name: string): void;
    rename(sectionId: number, name: string): void;
    remove(sectionId: number): void;
}
export interface IAnswersRepository extends IRepository<Answer> { }
