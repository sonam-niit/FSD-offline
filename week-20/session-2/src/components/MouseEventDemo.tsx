import { useState } from "react";

function MouseEventDemo() {
    const [position,setPosition]=useState({x:0,y:0})

    const handleMouseEvent=(e:React.MouseEvent<HTMLDivElement>)=>{
        setPosition({
            x:e.clientX,
            y:e.clientY
        })
    }
    return ( 
        <>
            <div onMouseMove={handleMouseEvent}
            style={{ height:"100vh", border:"2px solid black"}}>
                <h2>Mouse position</h2>
                <p>x: {position.x}</p>
                <p>y: {position.y}</p>
            </div>
        </>
     );
}

export default MouseEventDemo;