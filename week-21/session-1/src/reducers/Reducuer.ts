import type { Action } from "../types/Actions";

//(state,action) -> return a new state
export function reducer(state: number, action: Action): number {
    switch (action.type) {
        case "increment":
            return state + 1;
        case "incrementByNum":
            return state + action.payload
        case "decrement":
            return state - 1;
        case "decrementByNum":
            return state - action.payload;
        case "reset":
            return 0;
        default:
            return state;
    }
}
