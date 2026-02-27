import { useEffect } from "react";

function PostList() {
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res=>res.json())
        .then(data=>console.log(data))
    },[])
    return ( 
        <h1>Data Loaded</h1>
     );
}

export default PostList;