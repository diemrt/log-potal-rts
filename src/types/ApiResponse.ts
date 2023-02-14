export type MultipleResponseType<Type> = {
    data: Type,
    page: number,
    pages: number,
    count: number
};

export type SingoleResponseType<Type> = {
    data: Type
}