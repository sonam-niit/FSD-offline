import Demo1 from "./components/Demo1";
import Greeting from "./components/Greeting";
import Twitter from "./components/Parent";
import PostList from "./components/PostList";
import UserList from "./components/UserList";
import Welcome from "./components/Welcome";

const App = () => {

  return (
    <div>
      <h1>Hello</h1>
      <p>My Para</p>
      <Greeting />
      <UserList />
      <Welcome /> 
      <Demo1 />
      <PostList />
      <Twitter />
      {/* Welcome Compoent is Created */}
    </div>
  )
}
export default App;
