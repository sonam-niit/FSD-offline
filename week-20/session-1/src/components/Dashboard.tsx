type Props = {
    isLoggedIn:boolean
}
function Dashboard({isLoggedIn}:Props) {
    // use of If
    // if(!isLoggedIn)
    //     return <h2>Please Login</h2>

    // return <h2>Welcome to Dashboard</h2>

    //using ternary

    return (
        <>
            {isLoggedIn ? <h2>Dashboard</h2> 
            : <h2>Please Login</h2>}
        </>
    )
}

export default Dashboard;