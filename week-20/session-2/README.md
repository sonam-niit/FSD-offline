# State Management

**What is state?**

- It is an object which stores dynamic Data in a component
- it is mutable
- state is private to the component

- In class Component
    + this.state - to create state
    + this.setState() - to update state

## Synthetic Events

- it is providing a wrapper to browser DOM event
- React creates its own event system to make event handling more easy and consitent.

- React uses camelCase: onClick, onChange, onSubmit
- always pass function reference- onClick={handleClick}
- never pass function call- onClick={handleClick()}

## Keyboards Events

- onKeyDown (when key pressed)
- onKeyUp (when key released)
- onKeyPress - Deprecated


## Default Behaviour of Form tag

- when you click on submit button
- you will be redirected to next page
- but react is SPA
- we want to stop this natural behaviour

```tsx
const handleSubmit=(e: React.SubmitEvent<HTMLFormElement>)=>{
        e.preventDefault() //this will stop default behaviour
        alert("Form Submitted")
    }
```