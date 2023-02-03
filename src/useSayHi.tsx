import { useEffect, useState } from "react";
import sayHi from "./SayHi";

function useSayHi(customName: string){
    const [name, setName] = useState<string | null>(null);

    useEffect(() => {
        setTimeout(() => {
            setName(customName);
        }, 3000);
    });

    return sayHi(name);
}

export default useSayHi;