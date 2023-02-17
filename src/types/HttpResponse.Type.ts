export type MultipleResponseType<Type> = {
    data: Type[],
    page: number,
    pages: number,
    count: number
};

export type SingoleResponseType<Type> = {
    data: Type
}

export type HttpGetAllResponseType<Type> = [MultipleResponseType<Type> | undefined, boolean];

export type HttpResponseStatusType = {
    label: 'LOADING' | 'SUCCESS',
    isLoading: boolean
}