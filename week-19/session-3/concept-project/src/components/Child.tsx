
type ChildProp ={
    title: String,
    author: String
}
function Post({title,author}:ChildProp) {
    return ( 
        <>
            <hr />
            <h2>Post Title: {title}</h2>
            <h2>Author: {author}</h2>
        </>
     );
}

export default Post;