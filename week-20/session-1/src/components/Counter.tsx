import { useState } from "react";

function Counter() {
    const [count,setCount]=useState(0);
    const [name,setName]=useState("Guest");

    const handleDecrement=()=>{ 
        if(count<=0)
            alert("Count cannot be negative")
        else
            setCount(count-1) 
    }
    const changeName=(aname:string)=>{
        setName(aname)
    }
    return ( 
        <>
            <h1>Counter Demo: {count} </h1>
            <button onClick={()=> setCount(count+1)}>+</button>
            <button onClick={handleDecrement}>-</button>

            <h3>Welcome {name}</h3>
            <button onClick={()=>{changeName("John Doe")}}>
                ChangeMyName</button>
            {/* Passing arguments */}
        </>
     );
}

export default Counter;