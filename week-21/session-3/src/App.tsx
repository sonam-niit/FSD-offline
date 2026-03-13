import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Navbar from "./pages/Navbar"
import Users from "./components/Users"
import UserDetails from "./components/UsersDetails"
import Dashboard from "./pages/Dashboard"
import Skills from "./pages/Skills"
import Projects from "./pages/Project"

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Home />} /> 
        {/* index for defaultr Path */}
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/users" element={<Users />} />
        <Route  path="/dashboard" element={<Dashboard />} >
          {/* Nested */}
          <Route index  element={<Skills />} />
          <Route path="projects" element={<Projects />} />
        </Route>
        <Route path="/users/:id" element={<UserDetails />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
// <a> - reloads the page
//<Link> tag change URL without refreshing
// we should not use <a/> tag here
