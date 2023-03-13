import { useEffect, useState } from "react";

export default function Child({parentCount}){
    const[childCount, setChildCount] = useState(0);

    useEffect(()=>{
        setChildCount(parentCount * 2);

        console.log(`useEffect logic ran`);
    }, [parentCount]);

    return(
        <div>
            <button>Child count {childCount}</button>
        </div>
    )
}