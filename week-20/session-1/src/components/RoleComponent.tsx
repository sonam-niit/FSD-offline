type Props = {
    role: "admin"|"user"|"guest"
}
function RoleComponent({role}:Props) {
    switch (role){
        case "admin" : 
            return <p>Admin Access</p>
        case "user" : 
            return <p>User Access</p>
        case "guest" : 
            return <p>Guest View</p>
        
    }
}

export default RoleComponent;
// Multiple Conditions