export type GenericItem = {
    value: any,
    label: string
}
export type SortableItem = {
    position: number
}

export type Product = SortableItem & {
    name: string,
    apiRoute: string
}