import { useState } from "react";
import { UseProductsResultType } from "../../types/AppServices.Type";

export default function SidebarProductSelect(props: {useProduct: UseProductsResultType}){
    let [current, list, updateList] = props.useProduct;
    let [show, setShow] = useState(false);
    let showOn = () => setShow(true);
    let showOff = () => setShow(false);

    let unloaded = (
        <div className="flex flex-col gap-1">
            <div className="w-full h-8 bg-slate-400 rounded-md animate-pulse"></div>
            <div className="w-1/2 h-2 bg-slate-400 rounded-md animate-pulse"></div>
        </div>        
    );

    return typeof current !== "undefined" 
    && typeof list !== "undefined" 
    ? (
        <div className="flex flex-col gap-1">
            <button className="w-full flex flex-row justify-between items-center p-3 bg-white border-2 border-slate-300 rounded-md hover:border-indigo-500" onClick={show ? showOff : showOn}>
                <div className="flex flex-row items-center gap-3">
                    <img alt="company" src={`/images/${current.company}.png`} className="h-8 w-8 rounded-md object-cover"/> 
                    <span className="whitespace-nowrap overflow-hidden w-32">{current.name}</span>
                </div>
                <span className="material-symbols-outlined">unfold_more</span>
            </button>
            {show ? (
                <div id="select-items-wrapper" className="absolute top-52 flex flex-col gap-3 p-3 min-w-fit text-xs rounded-md bg-white border-2 border-slate-300">
                    {list.map(p => 
                        <button onClick={() => {showOff(); updateList(p)}} id={p.position.toString()} className="flex flex-row items-center gap-3 hover:text-indigo-500">
                            <img alt="company" src={`/images/${p.company}.png`} className="h-6 w-6 rounded-md object-cover"/>  
                            <span className="whitespace-nowrap">{p.name}</span>
                        </button>
                    )}
                    
                </div>
            ) : (<div></div>)}
        </div>
    ) 
    : unloaded;
}