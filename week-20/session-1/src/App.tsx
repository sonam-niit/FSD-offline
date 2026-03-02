import FruitList from "./components/FruitList"
import ProductList from "./components/ProductList"
import UserList from "./components/UserList"

import UserData from "./assets/users.json";
import type { User } from "./types/User";
import Dashboard from "./components/Dashboard";
import Notification from "./components/Notification";
import RoleComponent from "./components/RoleComponent";
import  { useState } from "react";
import Counter from "./components/Counter";
function App() {
  const [visible,setVisible]=useState(false)
  const [name,setName]  = useState("Sonam Soni")
  const changeName=()=>{
    setName("Alex")
  }
  return (
    <>
      {visible && <Counter />} 
      <br/><br/>
      <button onClick={()=>setVisible(!visible)}>{visible? 'Hide':'Show'}</button>
      <h3>Welcome {name}</h3>
      <button onClick={changeName}>Click ME</button>

      {/* Conditional Rendering */}
      <Dashboard isLoggedIn={false} />
      <Notification hasNotification={false} />
      <RoleComponent role="guest" />
      {/* List Rendering */}
      <FruitList />
      <ProductList />
      <UserList users={[]}/>
      <UserList users={UserData as User[]}/>
      {/* this is more type secure */}
    </>
  )
}

export default App
