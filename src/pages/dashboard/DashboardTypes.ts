import { Type } from "typescript";
import { MultipleResponseType } from "../../types/ApiResponse";


export type GetAllStorePortalNetworkLogs = MultipleResponseType
export type LogsProps = {
    data?: Type
};
export type DashboardLogsStatusProps = {
    method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH"
}
