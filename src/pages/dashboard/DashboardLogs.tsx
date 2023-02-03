import DashboardLogsStatus from "./DashboardLogsStatus";
import { LogsProps } from "./DashboardTypes";
import DashboardLogsLoading from "./DashboardLogsLoading";

export default function DashboardLogs(props: LogsProps){

    //if(props.data !== undefined) {
        return (
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Username</th>
                        <th scope="col">Meotod</th>
                        <th scope="col">Status</th>
                        <th scope="col">Url</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>diego.martignoni@lemonpie.it</td>
                        <td><DashboardLogsStatus method="GET"/></td>
                        <td>200</td>
                        <td>http://loca...</td>
                    </tr>
                </tbody>
            </table>
            
        );
    //}
    //return <DashboardLogsLoading />;
}