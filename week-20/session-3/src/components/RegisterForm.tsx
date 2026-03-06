import { useState } from "react";

function RegisterForm() {
    const [email,setEmail]=useState("");
    const [age,setAge]=useState(0);
    const [subscribe,setSubscribe]=useState(false);

    const handleSubmit=(event:React.SubmitEvent<HTMLFormElement>)=>{
        event.preventDefault();
        console.log(email,age,subscribe)
    }
    return ( 
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} /> 
            <br/><br/>
            <input type="number" placeholder="Age" onChange={(e)=>setAge(Number(e.target.value))}/> 
            <br/><br/>
            <label>
                <input type="checkbox" onChange={(e)=>setSubscribe(e.target.checked)}/>
            </label>
            <button type="submit">Register</button>
        </form>
     );
}

export default RegisterForm;