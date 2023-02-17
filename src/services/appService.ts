import { useEffect, useState } from "react";
import { Product } from "../types/Common.Type";
import { useGetAllProducts } from "./api/productsService";

export default function useGetProductSelector(){

    let {products, isLoading} = useGetAllProducts();
    let [current, setCurrent] = useState<Product>();
    let [dynamicList, setDinamycList] = useState<Product[] | undefined>(products);
    const newCurrent = (newItem: Product) => {
        if(typeof dynamicList !== "undefined" && typeof current !== "undefined"){
            let newDynamic = [...dynamicList].filter(p => JSON.stringify(newItem) !== JSON.stringify(p));
            newDynamic.push(current);
            
            setDinamycList(newDynamic.sort((a, b) => a.positionNumber - b.positionNumber));
            setCurrent(newItem);
        }        
    }

    useEffect(() => {
        if(typeof products !== "undefined" && !isLoading){
            setCurrent(products[0]);
            setDinamycList(products.slice(1).sort((a, b) => a.positionNumber - b.positionNumber));
            
        }
    },[products, isLoading])

    return {current, dynamicList, newCurrent};

}