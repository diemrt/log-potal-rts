import { useEffect, useState } from "react";
import { Product } from "../../types/Entities.Type";
import { GetAllProductsResponseType } from "../../types/response/ProductsResponse.Type";
import useHttpGetAllRequest from "../httpRequest";


const REMOTE_UTL = '/data/GETAllProducts_mock.json';

export function useGETAllExternalProducts() {

    const [externalProducts, isLoading] = useHttpGetAllRequest<GetAllProductsResponseType>(REMOTE_UTL);
    let [products, seProducts] = useState<Product[] | undefined>();
    
    useEffect(() => {
        setTimeout(() => {
            const mappedProducts: Product[] = externalProducts?.data.map(exi => {
                return {
                    apiRoute: exi.apiRoute,
                    name: exi.name,
                    position: exi.position,
                    company: exi.company
                }
            }) as Product[];
            seProducts(mappedProducts);
        }, 300);
    },[externalProducts])

    return {products, isLoading};
}
