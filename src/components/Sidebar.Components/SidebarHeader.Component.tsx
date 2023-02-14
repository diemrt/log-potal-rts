import { SidebarHeaderProps } from "../types/ComponentsProps.Type";
import SidebarProductSelect from "./SidebarProductSelect.Component";

export default function SidebarHeader(props: SidebarHeaderProps){

    return (
        <div className="flex flex-col gap-12">
            <div className="flex flex-row gap-3 items-center text-slate-900">
                <span className="material-symbols-outlined">pattern</span>
                <span className="text-xl font-bold">Log Portal</span>
            </div>
            <SidebarProductSelect />
        </div>
    );
}