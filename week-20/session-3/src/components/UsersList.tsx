import { useEffect, useState } from "react";

type User = {
    id: number,
    name: string,
    email: string
}
function UsersList() {

    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)

    const fetchData = async () => {
        try {
            setLoading(true)
            const response = await fetch("https://jsonplaceholder.typicode.com/users")
            if (!response.ok) {
                throw new Error("Failed to fetch Errors")
            }
            const data = await response.json()
            setUsers(data)
            console.log(data)
        } catch (error: any) {
            setError(error.message)
        } finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        fetchData()
    }, []) //[] empty dependency runs useEffect only once

    if (error) return (<h3>Error: {error}</h3>)
    return (
        <div>
            {loading ? <h3>loading....</h3> : (
                <>
                    <h2>User's List</h2>
                    <ul>
                        {users.map(user => (
                            <li key={user.id}>{user.name} , {user.email}</li>
                        ))}
                    </ul>
                </>
            )}
        </div>
    );
}

export default UsersList;