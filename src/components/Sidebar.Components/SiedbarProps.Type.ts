import { Product } from "../../types/Common.Type"

export type SidebarProps = {
    products: Product[] | undefined,
    setProductsCallback: React.Dispatch<React.SetStateAction<Product[] | undefined>>
}