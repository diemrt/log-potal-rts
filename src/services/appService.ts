import { useEffect, useState } from "react";
import { Product } from "../types/Common.Type";
import { updateSelectInput } from "../utils/selectInputUtils";
import { useGetAllProducts } from "./api/productsService";

export default function useProduct(){

    let {products, isLoading} = useGetAllProducts();
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

    return {current, dynamicList, updateCurrent};

}