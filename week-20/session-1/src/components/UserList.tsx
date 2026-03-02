import React from "react";
import type { User } from "../types/User";
type Props= {
    users: User[]
}
// const UserList: React.FC<Props> = ({users})=> {
// const UserList= ({users}:Props)=> {

function UserList({users}:Props){
    return ( <>
        {
            users.length==0 ? ( <h3>No Users Found</h3> ) 
            :
            (users.map(user=>(
                <React.Fragment key={user.id}>
                    <hr />
                    <h4>{user.name}</h4>
                    <p>{user.email}</p>
                </React.Fragment>
            )))
        }
    </> );
}

export default UserList;