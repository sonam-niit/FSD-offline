import { useState } from "react";

function InteractiveButton() {
    const [color,setColor]=useState('lightpink');
    const handleMouseEnter=()=>{
        setColor("lightblue")
    }
    const handleMouseLeave=()=>{
        setColor("lightpink")
    }
    const handleClick=()=>{
        alert("Its Clicked")
    }
    return ( 
        <>
            <button
            style={{
                backgroundColor:color
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
            >
                Hover & Click
            </button>
        </>
     );
}

export default InteractiveButton;