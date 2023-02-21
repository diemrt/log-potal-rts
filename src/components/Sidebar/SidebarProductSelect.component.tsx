import { UseProductsResultType } from "../../types/AppServices.Type";
import SelectInputComponent from "../form/SelectInput/SelectInput.component";
import SidebarProductsCollapse from "./SidebarProductsCollapse.component";

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
        <SidebarProductsCollapse useProduct={[list, updateList]} />
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