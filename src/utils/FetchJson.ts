import React from "react";
import { MultipleResponseType } from "../types/ApiResponse";

export function GETAllStorePortalNetworkLog(setHook: React.Dispatch<React.SetStateAction<MultipleResponseType | undefined>>) {
    fetch('/data/GETAllStorePortalNetworkLog_mock.json')
    .then((res) => res.json())
    .then((data: MultipleResponseType) => setTimeout(() => setHook(data), 2000))
    .catch((err) => console.log(err));
}