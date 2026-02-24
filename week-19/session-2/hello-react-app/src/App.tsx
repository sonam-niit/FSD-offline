import './App.css'
import Message from './components/Message'

// Message is exported function name ./Message is file name no need to mention .tsx

function App() {

  return (
    <>
      <h1>Welcome To my Home Page</h1>
      <Message />
      <Message />
      <Message />
      <Test />
      {/*  used component here */}
      {/* this is comment */}
    </>
  )
}

export default App

// This is also one component
function Test(){
  return (
    <h1>This is My Test Function</h1>
  )
}