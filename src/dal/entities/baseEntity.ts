import { CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

/**
 * Базовая сущность
 */
export abstract class BaseEntity {

    @PrimaryGeneratedColumn()
    public id: number;

    @CreateDateColumn({name: "created_at"})
    public createdAt: number;

    @UpdateDateColumn({ name: "updated_at"})
    public updatedAt: number;
}
