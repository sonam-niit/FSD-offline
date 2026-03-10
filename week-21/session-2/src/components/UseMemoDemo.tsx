import { useMemo, useState } from "react";

function UseMemoDemo() {
    const [count, setCount] = useState<number>(0);
    const [text, setText] = useState<string>("");

    const calculation=(num:number)=>{
        console.log("calculating.......")
        for(let i=0;i<100000000000;i++){
            return num*2;
        }
    }

    // const result=calculation(count); //calling calculation
    const result = useMemo(()=>{
        return calculation(count);
    },[count])

    return (
        <div>
            <h3>Use Memo HookDemo</h3>
            <h4>Conter: {count}</h4>
            <button onClick={()=>setCount(count+1)}>Increment</button>
            <br/><br/>
            <input type="text" placeholder="Type Something"
            value={text} onChange={(e)=>setText(e.target.value)} />
            <h3>Text: {text}</h3>

            <h3>Result: {result}</h3>
        </div>
    );
}

export default UseMemoDemo;