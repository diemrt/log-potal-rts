import { useEffect, useState } from "react";
import { ApiResponseStatusType, MultipleResponseType } from "../types/ApiResponse.Type";

export default function useHttpGetAllRequest<Type>(url: string) : [MultipleResponseType<Type> | undefined, boolean] {

    let [result, setResult] = useState<MultipleResponseType<Type> | undefined>();
    let [status, setStatus] = useState<ApiResponseStatusType>({label: 'LOADING', isLoading: true});

    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then((json: MultipleResponseType<Type>) => {
            setResult(json);
            setStatus({label: 'SUCCESS', isLoading: false})
        })
    },[url])

    return [result, status.isLoading];
}