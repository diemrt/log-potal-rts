import { MultipleResponseType, SingoleResponseType } from "../../types/ApiResponse.Type"
import { GenericItem } from "../../types/Common.Type"
import { ProductResponse } from "./ComponentsResponse.Type"

export type SidebarProps = SidebarHeaderProps & SidebarFooterProps;
export type SidebarHeaderProps = {
    products: MultipleResponseType<ProductResponse> | undefined
};
export type SidebarFooterProps = {
    user: SingoleResponseType<GenericItem> | undefined
};