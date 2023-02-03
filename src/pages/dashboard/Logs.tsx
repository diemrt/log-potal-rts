import { LogsProps } from "./DashboardTypes";
import LoadingLogs from "./LoadingLogs";

export default function Logs(props: LogsProps){

    if(props.data !== undefined) {
        return (
            <div>
                
            </div>
        );
    }
    return <LoadingLogs />;
}