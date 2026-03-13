import { useEffect, useState } from "react";
import type { User } from "../Types/user";
import { Link } from "react-router-dom";

function Users() {
    const [users,setUsers]=useState<User[]>([])
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res=>res.json())
        .then(data=>setUsers(data))
        .catch(err=>console.log(err))
    },[])
    return ( 
        <>
            <h2>User's List</h2>
            {
                users.map(user=>(
                    <div key={user.id}>
                        <Link to={`/users/${user.id}`}>{user.name}</Link>
                    </div>
                ))
            }
        </>
     );
}

export default Users;