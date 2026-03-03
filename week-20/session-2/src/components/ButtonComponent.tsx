function ButtonComponent() {
    const handleClick=(event:React.MouseEvent<HTMLButtonElement>)=>{
        console.log(event)
        console.log(event.target)
        alert("Button Clicked")
    }
    return ( <>
        <button onClick={handleClick}>Click Me</button>
    </> );
}

export default ButtonComponent;

// event.target = Element from where event triggered