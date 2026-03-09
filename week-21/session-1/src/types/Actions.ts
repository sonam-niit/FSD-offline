export type Action =
    { type: "increment" } |
    { type: "incrementByNum"; payload: number } |
    { type: "decrement" } |
    { type: "decrementByNum"; payload: number } |
    { type: "reset" }