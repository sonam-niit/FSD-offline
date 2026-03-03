import { useState } from "react"

function TodoInput() {
  const [data, setData] = useState('')
  const handleKey = (e: React.KeyboardEvent<HTMLInputElement>)=>{
    if(e.key == "Enter"){
        console.log(data)
        setData("")
    }
  }
  return (
   <>
    <input type="text" 
     onChange={(e)=>setData(e.target.value)}
     onKeyDown={handleKey}
     placeholder="Type Anything"
    />
   </>
  )
}

export default TodoInput