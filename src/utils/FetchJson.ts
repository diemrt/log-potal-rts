import React from "react";
import { MultipleResponseType } from "../types/ApiResponse.Type";
import { GenericItem } from "../types/Common.Type";

export function GETAllStorePortalNetworkLog(setHook: React.Dispatch<React.SetStateAction<MultipleResponseType<GenericItem> | undefined>>) {
    fetch('/data/GETAllStorePortalNetworkLog_mock.json')
    .then((res) => res.json())
    .then((data: MultipleResponseType<GenericItem>) => setTimeout(() => setHook(data), 2000))
    .catch((err) => console.log(err));
}