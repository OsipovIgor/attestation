import { injectable, unmanaged } from "inversify";
import { Repository as TypeOrmRepository } from "typeorm";

import { IRepository } from "../../domain/interfaces/repositories";
import { IEntityDataMapper } from "../interfaces/EntityDataMapper";

@injectable()
export class Repository<TDomainEntity, TDalEntity> implements IRepository<TDomainEntity> {

    // tslint:disable-next-line:variable-name
    protected readonly _repository: TypeOrmRepository<TDalEntity>;
    // tslint:disable-next-line:variable-name
    protected readonly _dataMapper: IEntityDataMapper<TDomainEntity, TDalEntity>;

    public constructor(
        @unmanaged() repository: TypeOrmRepository<TDalEntity>,
        @unmanaged() dataMapper: IEntityDataMapper<TDomainEntity, TDalEntity>,
    ) {
        this._repository = repository;
        this._dataMapper = dataMapper;
    }

    public async getAll(): Promise<TDomainEntity[]> {
        const entities = await this._repository.find();
        return entities.map((entity) => this._dataMapper.toDomain(entity));
    }

    public async getById(id: number): Promise<TDomainEntity> {
        const entity = await this._repository.findOne(id);
        return this._dataMapper.toDomain(entity);
    }

}
