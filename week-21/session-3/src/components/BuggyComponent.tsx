function BuggyComponent() {
    const throwError=()=>{
        throw new Error("Crash!");
    }
    return ( 
        <>
            <h3>Buggy Component</h3>
            <button onClick={throwError}>Crash App</button>
        </>
     );
}

export default BuggyComponent;