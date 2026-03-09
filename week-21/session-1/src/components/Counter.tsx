import { useReducer } from "react";
import { reducer } from "../reducers/Reducuer";

function Counter() {
    const [count, dispatch] = useReducer(reducer, 0);
    return (
        <>
            <h2>Count: {count}</h2>

            <button onClick={() => dispatch({ type: "increment" })}>increment</button>
            <button onClick={() => dispatch({ type: "incrementByNum", payload: 5 })}>incrementBy5</button>
            <button onClick={() => dispatch({ type: "decrement" })}>decrement</button>
            <button onClick={() => dispatch({ type: "decrementByNum", payload:3 })}>decrementBy3</button>
            <button onClick={() => dispatch({ type: "reset" })}>reset</button>
        </>
    );
}

export default Counter;