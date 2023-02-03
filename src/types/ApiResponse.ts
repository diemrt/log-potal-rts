import { Type } from "typescript"

export type MultipleResponseType = {
    data: Type,
    page: number,
    pages: number,
    count: number
};

export type SingoleResponseType = {
    data: Type
}
