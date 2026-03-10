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