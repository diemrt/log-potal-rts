import { useEffect, useState } from "react";
import { Product } from "../../types/Common.Type";
import useHttpGetAllRequest from "../httpRequest";


const REMOTE_UTL = '/data/GETAllProducts_mock.json';

export function useGETAllExternalProducts() {

    const [externalProducts, isLoading] = useHttpGetAllRequest<Product>(REMOTE_UTL);
    let [products, seProducts] = useState<Product[] | undefined>();
    
    useEffect(() => {
        const mappedProducts: Product[] = externalProducts?.data.map(product => {
            return {
                apiRoute: product.apiRoute,
                name: product.name,
                position: product.position
            }
        }) as Product[];
        seProducts(mappedProducts);
    },[externalProducts])

    return {products, isLoading};
}
