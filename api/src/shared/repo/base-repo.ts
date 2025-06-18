export interface IRepository<T, TypeId> {
    save(
        data: T
    ): Promise<T>;

    delete(
        id: TypeId
    ): Promise<void>;

    update(
        id: TypeId, data: Partial<T>
    ): Promise<void>;

    findById(
        id: TypeId
    ): Promise<T | null>;

    findAll(): Promise<T[]>;
}