import { MultipleResponseType, SingoleResponseType } from "../../types/ApiResponse.Type"
import { GenericItem } from "../../types/Common.Type"
import { ProductResponse } from "./ComponentsResponse.Type"

export type SidebarProps = {
    products: MultipleResponseType<ProductResponse>,
    user: SingoleResponseType<GenericItem>
}