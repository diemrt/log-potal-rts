import { useState } from "react";
import { GetAllStorePortalNetworkLogs } from "./DashboardTypes";
import DashboardLogs from "./DashboardLogs";
import DashboardSearch from "./DashboardSearch";

function Dashboard(){
    const [logs, setLogs] = useState<GetAllStorePortalNetworkLogs>();

    return (
        <div className="container p-2">
            <div className="row mb-4">
                <DashboardSearch />
            </div>
            <div className="row">
                <DashboardLogs data={logs?.data}/>
            </div>
        </div>
    );
}

export default Dashboard;