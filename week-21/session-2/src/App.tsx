import { useState } from "react"
import BootstraModal from "./components/BootstrapModal";

function App() {
const [show,setShow]=useState(false);
  return (
    <>
      {/* <button onClick={()=>setShow(true)}>Show Model</button> */}

      <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={()=>setShow(true)}>
                Launch demo modal
            </button>
      {show && <BootstraModal />}
    </>
  )
}

export default App
