import { useState } from "react";

function InputDemo() {
    const [fname,setFname] = useState('');
    const [lname,setLname] = useState('');
    const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setFname(e.target.value)
    }
    return ( 
        <>
            <input type="text" value={fname} onChange={handleChange}
            placeholder="Enter First name"/> <br/><br/>
            <input type="text" value={lname} placeholder="Enter Last name"
            onChange={(e)=>setLname(e.target.value)}/> <br/>
            <h2>Welcome {`${fname} ${lname}`}</h2>
        </>
     );
}

export default InputDemo;