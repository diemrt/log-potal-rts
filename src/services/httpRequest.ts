import { useEffect, useState } from "react";
import { HttpResponseStatusType, HttpGetAllResponseType, MultipleResponseType } from "../types/HttpResponse.Type";

export default function useHttpGetAllRequest<Type>(url: string) : HttpGetAllResponseType<Type> {

    let [result, setResult] = useState<MultipleResponseType<Type> | undefined>();
    let [status, setStatus] = useState<HttpResponseStatusType>({label: 'LOADING', isLoading: true});

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