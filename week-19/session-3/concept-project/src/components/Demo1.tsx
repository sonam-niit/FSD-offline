import { useEffect } from "react";

function Demo1() {

    useEffect(()=>{
        console.log("Component Mounted")
    },[])
    // this hook will execute only once when component is mounted
    return ( 
        <>
            <h1>Demo For UseEffect</h1>
        </>
     );
}

export default Demo1;