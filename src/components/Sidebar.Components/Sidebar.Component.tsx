import SidebarFooter from "./SidebarFooter.Component";
import SidebarHeader from "./SidebarHeader.Component";
import { SidebarProps } from "./SiedbarProps.Type";

export default function Sidebar(props: SidebarProps){
    return (
        <div className="flex flex-col justify-between p-8 bg-slate-200 h-screen w-64">
            <SidebarHeader {...props} />
            <SidebarFooter />
        </div>
    );
}