import { Product } from "./Entities.Type";

export type UseProductsResultType = [Product | undefined, Product[] | undefined,  (newItem: Product) => void];