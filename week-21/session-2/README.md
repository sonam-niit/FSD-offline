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


### Custom Hooks

- understand

![Custom Hook](images/custom-hook.png)

- create CustomHook: useCounter.ts

```ts
import { useState } from "react"

export const useCounter = (initialValue: number=0)=>{

    const [count,setCount]=useState<number>(initialValue);

    const increment = ()=>setCount(prev=>prev+1);
    const decrement = ()=>setCount(prev=>prev-1);
    const reset = ()=>setCount(initialValue);

    return {count,increment,decrement,reset}
}
```

- use inside Counter Component

```tsx
import { useCounter } from "./useCounter";

function Counter() {
    const {count,increment,decrement,reset}=useCounter(0);
    return (
        <>
            <h2>Count: {count}</h2>

            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <button onClick={reset}>Reset</button>
        </>
      );
}

export default Counter;
```
- include it in App.tsx and check how it works.
- this helkps us to utilize same business logic in multiple components