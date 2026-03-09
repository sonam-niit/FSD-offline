type AvtarProps ={
    name: string
}
function Avatar({name}:AvtarProps) {
    return ( 
        <div style={{border:"2px solid blue",padding:"10px"}}>
            <h3>Avatar Component</h3>
            <h4>name: {name}</h4>
        </div>
     );
}

export default Avatar;