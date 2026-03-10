import { useFetch } from "../customhooks/useFetch";

function PostList() {
    const {data,loading,error}=
    useFetch<any[]>("https://jsonplaceholder.typicode.com/posts");
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
                            data?.map(post=>(
                                <li key={post.id}>{post.title}</li>
                            ))
                        }
                    </ul>
                )
            }
        </>
     );
}

export default PostList;