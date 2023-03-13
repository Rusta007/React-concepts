import { Children } from "react";

export default function Parent(){
    const[parentCount, setParentCount] = useState(0);

    return(
        <div>
            <button 
                onClick={()=> setParentCount(current => current + 1)}
            >
                Parent Count : {parentCount}
            </button>
            <hr />
            <Child parentCount = {parentCount} />
        </div>
    )
}