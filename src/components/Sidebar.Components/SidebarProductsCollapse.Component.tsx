import { Product } from "../../types/Entities.Type";

export default function SidebarProductsCollapse(props: {useProduct: [Product[] | undefined, (newItem: Product) => void]}) {    
    let [list, updateList] = props.useProduct;

    return (
        <div id="select-items-wrapper" className="absolute top-52 flex flex-col gap-3 p-3 min-w-fit text-xs rounded-md bg-white border-2 border-slate-300">
            {list?.map(p => 
                <button key={p.position.toString()} onClick={() => {updateList(p)}} className="flex flex-row items-center gap-3 hover:text-indigo-500">
                    <img alt="company" src={`/images/${p.company}.png`} className="h-6 w-6 rounded-md object-cover"/>  
                    <span className="whitespace-nowrap">{p.name}</span>
                </button>
            )}
            
        </div>
    );
}