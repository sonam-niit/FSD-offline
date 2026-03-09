import React from "react";

type Props = {
    onClick: () => void
}

const Child=React.memo(({onClick}:Props)=>{
    console.log("Child Rendered")
    return (
        <>
            <h2>Child Component</h2>
            <button onClick={onClick}>
                Click Child Button</button>
        </>
    );
})

export default Child;