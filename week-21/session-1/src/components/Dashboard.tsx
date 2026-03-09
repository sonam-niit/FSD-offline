import { useContext } from "react";
import Profile from "./Profile";
import { ThemeContext } from "../context/ThemeContext";

function Dashboard() {
    const user = {name: "Sonam Soni"}

    const context = useContext(ThemeContext);
    if(!context) return null;

    const {toggleTheme} = context; //destructing 
    return ( 
        <div style={{border:"2px solid red", padding:"10px"}}>
            <h3>Dashboard Component</h3>
            <Profile name={user.name} />

            <button onClick={toggleTheme}>Change Theme</button>
        </div>
     );
}

export default Dashboard;