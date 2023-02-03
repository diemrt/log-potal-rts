import { useEffect, useState } from "react";
import { GetAllStorePortalNetworkLogs } from "./DashboardTypes";
import DashboardLogs from "./DashboardLogs";
import DashboardSearch from "./DashboardSearch";
import { GETAllStorePortalNetworkLog } from "../../utils/FetchJson";

function Dashboard(){
    const [logs, setLogs] = useState<GetAllStorePortalNetworkLogs>();
    useEffect(() => {
        GETAllStorePortalNetworkLog(setLogs);
    });

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