import { useState } from "react";

function SimpleForm() {
    const [name,setName] =useState("");
    const handleSubmit=(e:React.SubmitEvent<HTMLFormElement>)=>{
        e.preventDefault();
        alert("Submitted: "+name);
        console.log("Form submitted with",name)
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text"
            placeholder="Enter name"
            value={name}
            onChange={(e)=>setName(e.target.value)} />

            <button type="submit">Submit</button>
        </form>
     );
}

export default SimpleForm;