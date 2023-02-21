import { useEffect, useState } from "react";
import { UseProductsResultType } from "../types/AppServices.Type";
import { Product } from "../types/Entities.Type";
import { updateSelectInput } from "../utils/selectInputUtils";
import { useGETAllExternalProducts } from "./api/products.client";

export default function useProduct(): UseProductsResultType{

    let {products, isLoading} = useGETAllExternalProducts();
    let [current, setCurrent] = useState<Product>();
    let [dynamicList, setDinamycList] = useState<Product[] | undefined>(products);
    const updateCurrent = (newItem: Product) => {
        if(typeof dynamicList !== "undefined" && typeof current !== "undefined")
            updateSelectInput(newItem, current, dynamicList, setCurrent, setDinamycList);
    }

    useEffect(() => {
        if(typeof products !== "undefined" && !isLoading){
            setCurrent(products[0]);
            setDinamycList(products.slice(1).sort((a, b) => a.position - b.position));
            
        }
    },[products, isLoading])

    return [current, dynamicList, updateCurrent];

}