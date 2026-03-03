function KeyboardExample() {
    const handleDown= (e: React.KeyboardEvent<HTMLInputElement>)=>{
        console.log("key Pressed "+e.key)
        if(e.key=="Enter"){
            alert("Enter Key Pressed")
        }
        if(e.key=="y"){
            alert("Said Yes")
        }
    }
    return ( 
        <>
            <input type="text"
            onKeyDown={handleDown}
            placeholder="type anything" />
        </>
     );
}

export default KeyboardExample;