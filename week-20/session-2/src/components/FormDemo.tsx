function FormDemo() {
    const handleSubmit=(e: React.SubmitEvent<HTMLFormElement>)=>{
        e.preventDefault()
        alert("Form Submitted")
    }
    return ( 
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter Data" />
                <button type="submit">Register</button>
            </form>
        </>
     );
}

export default FormDemo;