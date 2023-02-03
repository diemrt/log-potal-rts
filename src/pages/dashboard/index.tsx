import { useState } from "react";
import { GetAllStorePortalNetworkLogs } from "./DashboardTypes";
import Logs from "./Logs";
import Search from "./Search";

function Dashboard(){
    const [logs, setLogs] = useState<GetAllStorePortalNetworkLogs>();

    return (
        <div className="container p-2">
            <div className="row mb-4">
                <Search />
            </div>
            <div className="row">
                <Logs data={logs?.data}/>
            </div>
        </div>
    );
}

export default Dashboard;