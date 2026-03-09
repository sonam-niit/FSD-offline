import { useCallback, useState } from "react";
import Child from "./Child";

function Parent() {
    const [count,setCount]=useState(0)

    const handleClick = useCallback(()=>{
        console.log("Child Button Clicked")
    },[])
    return ( 
        <>
            <h2>Parent Component: {count}</h2>
            <button onClick={()=>setCount(count+1)}>Update Count</button>

            <Child onClick={handleClick} />
        </>
     );
}

export default Parent;