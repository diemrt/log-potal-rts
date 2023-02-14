import SidebarProductSelect from "./SidebarProductSelect.Component";
import { SidebarProps } from "./SiedbarProps.Type";

export default function SidebarHeader(pros: SidebarProps){

    return (
        <div className="flex flex-col gap-12">
            <div className="flex flex-row gap-3 items-center text-slate-900">
                <span className="material-symbols-outlined">pattern</span>
                <span className="text-xl font-bold">Log Portal</span>
            </div>
            <div className="flex flex-col gap-5">
                <label className="text-slate-700 text-xs font-bold">PRODOTTO</label>
                <SidebarProductSelect />
            </div>
        </div>
    );
}