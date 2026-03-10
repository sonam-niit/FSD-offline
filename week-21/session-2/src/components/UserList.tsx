import { useFetch } from "../customhooks/useFetch";

function UserList() {
    const {data,loading,error}=
    useFetch<any[]>("https://jsonplaceholder.typicode.com/users");
    return ( 
        <> 
            {
                loading?(
                    <p>Loading.........</p>
                ): error ? (
                    <p>Error...{error}</p>
                ):(
                    <ul>
                        {
                            data?.map(user=>(
                                <li key={user.id}>{user.name}</li>
                            ))
                        }
                    </ul>
                )
            }
        </>
     );
}

export default UserList;