interface ITransaction {
    transaction<T>(
        fn: () => Promise<T>
    ): Promise<T>
}