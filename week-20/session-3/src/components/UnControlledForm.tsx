import { useRef } from "react";

function UnControlledForm() {
    const nameRef= useRef<HTMLInputElement>(null);
    const handleSubmit=(e:React.SubmitEvent<HTMLFormElement>)=>{
        e.preventDefault();
        if(nameRef.current){
            alert("Name: "+ nameRef.current.value)
        }
    }
    return ( 
        <form onSubmit={handleSubmit}>
            <input type="text" ref={nameRef} placeholder="Enter Name"/>
            <button type="submit">Submit</button>
        </form>
     );
}

export default UnControlledForm;