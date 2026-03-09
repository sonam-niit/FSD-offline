import Avatar from "./Avtar";

type ProfileProps ={
    name: string
}
function Profile({name}:ProfileProps) {
    return (
        <div style={{border:"2px solid black",padding:"10px"}}>
            <h3>Profile Component</h3>
            <Avatar name={name} />
        </div>
    );
}

export default Profile;