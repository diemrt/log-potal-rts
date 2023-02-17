import { useEffect, useState } from "react";
import { Product } from "../../types/Common.Type";
import useHttpGetAllRequest from "../httpRequest";
const REMOTE_UTL = '/data/GETAllProducts_mock.json';

export function useGetAllProducts() {

    const {result, isLoading} = useHttpGetAllRequest<Product>(REMOTE_UTL);
    let [products, setMapProducts] = useState<Product[] | undefined>();
    
    useEffect(() => {
        const mappedProducts: Product[] = result?.data.map(product => {
            return {
                apiRoute: product.apiRoute,
                name: product.name,
                positionNumber: product.positionNumber
            }
        }) as Product[];
        setMapProducts(mappedProducts);
    },[result])

    return {products, isLoading};
}
