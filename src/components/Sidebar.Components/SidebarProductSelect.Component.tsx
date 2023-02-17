import { UseProductsResultType } from "../../types/AppServices.Type";
import SelectInputComponent from "../SelectInput.Component";

export default function SidebarProductSelect(props: {useProduct: UseProductsResultType}){
    let [current, list, updateList] = props.useProduct;
    const lazyLoadingPros = {
        renderCondition: typeof current !== "undefined" && typeof list !== "undefined",
        skeleton: (
            <div className="flex flex-col gap-1">
                <div className="w-full h-8 bg-slate-400 rounded-md animate-pulse"></div>
                <div className="w-1/2 h-2 bg-slate-400 rounded-md animate-pulse"></div>
            </div>        
        )
    }; 
    const popUpElement = (
        <div id="select-items-wrapper" className="absolute top-52 flex flex-col gap-3 p-3 min-w-fit text-xs rounded-md bg-white border-2 border-slate-300">
            {list?.map(p => 
                <button onClick={() => {updateList(p)}} id={p.position.toString()} className="flex flex-row items-center gap-3 hover:text-indigo-500">
                    <img alt="company" src={`/images/${p.company}.png`} className="h-6 w-6 rounded-md object-cover"/>  
                    <span className="whitespace-nowrap">{p.name}</span>
                </button>
            )}
            
        </div>
    );

    return (
        <SelectInputComponent lazyLoading={lazyLoadingPros} popUpElement={popUpElement}>
            <div className="flex flex-col gap-1">
                <div className="w-full flex flex-row justify-between items-center p-3 bg-white border-2 border-slate-300 rounded-md hover:border-indigo-500">
                    <div className="flex flex-row items-center gap-3">
                        <img alt="company" src={`/images/${current?.company}.png`} className="h-8 w-8 rounded-md object-cover"/> 
                        <span className="whitespace-nowrap overflow-hidden w-32">{current?.name}</span>
                    </div>
                    <span className="material-symbols-outlined">unfold_more</span>
                </div>
            </div>
        </SelectInputComponent>
    );
}