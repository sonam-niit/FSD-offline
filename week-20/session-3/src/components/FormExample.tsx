import { useState } from "react";

type FormData = {
    firstName:string,
    lastName:string,
    email:string
}
type FormErrors = {
    firstName?:string, //The property may exist or may not exist, if its exist then it must be string
    lastName?:string,
    email?:string
}
function FormExample() {
    const [form,setForm] = useState<FormData>({firstName:"",lastName:"",email:""})
    const [errors,setErrors] = useState<FormErrors>({})
    const validate=()=>{
        let newErrors:FormErrors = {}
        if(!form.firstName.trim()){
            newErrors.firstName = "First name cannot be empty"
        }
        if(!form.lastName.trim()){
            newErrors.lastName = "Last name cannot be empty"
        }
        if(!form.email.trim()){
            newErrors.email = "EmailID cannot be empty"
        }
        return newErrors;
    }
    const handleSubmit=(e:React.SubmitEvent<HTMLFormElement>)=>{
        e.preventDefault();
        const validationErros=validate();
        setErrors(validationErros)
        if(Object.keys(validationErros).length===0){
            console.log(form)
            alert("Form Submitted Successfully for Approvals!")
        }
    }
    // const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
    //     setForm({...form,[e.target.name]:e.target.value})
    // }
    return ( 
        <form onSubmit={handleSubmit}>
            <div>
                <input type="text" placeholder="FirstName" 
                onChange={(e)=>setForm({...form,firstName:e.target.value})} />
                {errors.firstName && <p>{errors.firstName}</p>}
            </div>
            <div>
                <input type="text" placeholder="LastName"
                onChange={(e)=>setForm({...form,lastName:e.target.value})}  />
                {errors.lastName && <p>{errors.lastName}</p>}
            </div>
            <div>
                <input type="text"  placeholder="Email" 
                onChange={(e)=>setForm({...form,email:e.target.value})} />
                {errors.email && <p>{errors.email}</p>}
            </div>
            <button type="submit">Register</button>
        </form>
     );
}

export default FormExample;