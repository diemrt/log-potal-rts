import SelectInput from "../Form.Components/SelectInput.Component";

export default function SidebarProductSelect(){

    return (
        <div className="flex flex-col gap-5">
            <label className="text-slate-700 text-xs font-bold">PRODOTTO</label>
            <SelectInput />
        </div>
    )
}