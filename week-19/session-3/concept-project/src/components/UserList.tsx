import React from "react";
type User= {
    id:number,
    name: String,
    age:number
}
function UserList() {
    const users:User[] = [
        {id:1,name:"alex",age:22},
        {id:2,name:"bobby",age:25},
        {id:3,name:"catty",age:24}
    ]
    return ( <>
        <h2>User's List</h2>
        {
            users.map((user)=>(
                <React.Fragment key={user.id}> 
                    <h3>Name: {user.name}</h3>
                    <p>Age: {user.age}</p>
                    <hr/>
                </React.Fragment>
            ))
        }
    </> );
}

export default UserList;

//<div key={user.id}>  this is for each div unique identity
//<> </> without key
// React.Fragment use with key