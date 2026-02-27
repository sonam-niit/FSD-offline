import Post from "./Child";

function Twitter() {
    return ( 
        <>
            <h1>This is parent Component</h1>
            <Post title="Intro to React" author="Sonam Soni" />
            <Post title="React router" author="Sonam Soni" />
            <Post title="React Axios" author="Sonam Soni" />
        </>
     );
}

export default Twitter;