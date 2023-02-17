import { Product } from "../../types/Entities.Type"

export type SidebarProps = {
    products: Product[] | undefined,
    currentProduct: Product | undefined,
    setProductsCallback: React.Dispatch<React.SetStateAction<Product[] | undefined>>
    setCurrentProductCallback: React.Dispatch<React.SetStateAction<Product | undefined>>
}