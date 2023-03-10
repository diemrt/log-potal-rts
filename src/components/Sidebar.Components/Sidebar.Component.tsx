import { UseProductsResultType } from "../../types/AppServices.Type";
import SidebarFooter from "./SidebarFooter.Component";
import SidebarHeader from "./SidebarHeader.Component";

export default function Sidebar(props: {useProduct: UseProductsResultType}){
    return (
        <div className="flex flex-col justify-between p-8 bg-slate-200 h-screen w-72">
            <SidebarHeader useProduct={props.useProduct} />
            <SidebarFooter />
        </div>
    );
}