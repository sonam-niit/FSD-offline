import { useNavigate, useParams } from "react-router-dom";
import type { User } from "../Types/user";
import { useEffect, useState } from "react";

type ParamType = {
    id: string
}
function UserDetails() {
    const { id } = useParams<ParamType>()
    const [user, setUser] = useState<User | null>(null)
    const navigate=useNavigate();
    
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(res => res.json())
            .then(data => setUser(data))
            .catch(err => console.log(err))
    }, [id]) //if id changes useEffect hook triggers
    if(!user) return <p>Loading....</p>
    return (
        <>
            <h2>User Details</h2> <hr />
            <p><b>Name:</b> {user.name}</p>
            <p><b>Username:</b> {user.username}</p>
            <p><b>Email ID:</b> {user.email}</p>
            <p><b>Phone:</b> {user.phone}</p>
            <p><b>Website:</b> {user.website}</p>

            <button onClick={()=>navigate(-1)}>Back</button>
        </>
    );
}

export default UserDetails;