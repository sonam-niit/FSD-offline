import { useState } from "react";

function UserForm() {
    const [firstName,setFirstName] =useState("");
    const [lastName,setLastName] =useState("");
    const handleSubmit=(e:React.SubmitEvent<HTMLFormElement>)=>{
        e.preventDefault();
        alert(`Submitted: ${firstName} ${lastName}`);
        console.log("Form submitted with",firstName,lastName)
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text"
            placeholder="Enter First Name"
            value={firstName}
            onChange={(e)=>setFirstName(e.target.value)} />
            <br/><br/>

            <input type="text"
            placeholder="Enter LastName"
            value={lastName}
            onChange={(e)=>setLastName(e.target.value)} />
            <br/><br/>

            <button type="submit">Submit</button>
        </form>
     );
}

export default UserForm;