# Use Memo Hook

![UseMemo](images/usememo.png)

- create componnet called UseMemoDemo

### Without use memo
```tsx
import { useState } from "react";

function UseMemoDemo() {
    const [count, setCount] = useState<number>(0);
    const [text, setText] = useState<string>("");

    const calculation=(num:number)=>{
        console.log("calculating.......")
        for(let i=0;i<100000000000;i++){
            return num*2;
        }
    }

    const result=calculation(count); //calling calculation
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
```
- save this component and add it inside App component
- check in browser, everytime when input state is getting changed the bigger calculation is executed without any reason.
- this is actualy downgrading perfomance
- to optimize that use usememo hook
- [] - we can add dependency
- [] empty array means it will calculate only once
- [count]m - calculate only if count state changed 

- now update function calling using below code

```tsx
const result = useMemo(()=>{
        return calculation(count);
    },[count])
```

- check in console 
- if input change then it will not trigger the function but if count changes it will trigger and result will re render.