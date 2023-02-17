import { SortableItem } from "./Generic.Type"

export type Product = SortableItem & {
    name: string,
    apiRoute: string
}