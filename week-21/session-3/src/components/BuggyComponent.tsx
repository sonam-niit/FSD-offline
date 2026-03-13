import { useState } from "react";

function BuggyComponent() {
    const [crash,setCrash]=useState(false)
    
    if(crash){
        throw new Error("Crash!!")
    }
    return ( 
        <>
            <h3>Buggy Component</h3>
            <button onClick={()=>setCrash(true)}>Crash App</button>
        </>
     );
}

export default BuggyComponent;