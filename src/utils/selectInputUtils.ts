import { SortableItem } from "../types/Generic.Type";

export function updateSelectInput(
    newest: SortableItem, //the newest value to set
    current: SortableItem, //the current value
    list: SortableItem[], //the list of current values
    cbSetCurrent: (value: any) => void, //the setter callback for current value
    cbSetList: (value: any) => void //the setter callback for the list
    ){
        let newList = [...list].filter(i => JSON.stringify(newest) !== JSON.stringify(i));
        newList.push(current);
    
        cbSetList(newList.sort((a, b) => a.position - b.position));
        cbSetCurrent(newest);
}