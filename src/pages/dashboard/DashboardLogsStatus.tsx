import { DashboardLogsStatusProps } from "./DashboardTypes";

export default function DashboardLogsStatus(props: DashboardLogsStatusProps){
    switch (props.method) {
        case "GET":
            return <span className="badge bg-success">GET</span>
        case "POST":
            return <span className="badge bg-warning">POST</span>
        case "PUT":
            return <span className="badge bg-primary">PUT</span>
        case "DELETE":
            return <span className="badge bg-danger">DELETE</span>
        case "PATCH":
            return <span className="badge bg-dark">PATCH</span>
        default:
            return <span className="badge bg-light">UNDEFINED</span>
    }
};