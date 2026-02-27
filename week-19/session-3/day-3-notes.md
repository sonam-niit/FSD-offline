# Creating React Project

- npm create vite@latest
- project name: first-app
- select framework: React
- Variant: typescript
- by default: select no for both prompts

- move to the project folder
- cd first-app
- npm install ( this will create node_modules & package_lock.json file in project folder)
- npm run dev 
- check output here: http://localhost:5173/

# Component

- Reusable Piece of UI
- React Component is JS or TS function which return JSX (UI)

- edit main.tsx and commet line.3 which is importing index.css (to remove default CSS)
- edit app.tsx as shown below

```tsx
import React from "react";

//create using Arrow Function
const App = () => {

  return (
    <div>
      <h1>Hello</h1>
      <p>My Para</p>
    </div>
  )
}
```

## JSX (JavaScript XML)
- here in above what we are returning from return function which is called JSX
- JSX must be wrapped inside single parent element
- Thats why I used div tag here

### Component Life Cycle

- lifecycle goes through creation --> updating --> removal

1. Component Created (Mounting)
2. Updated (Component Re-rendered)
3. Component Removal (Unmounting)

- Component Created (Mount): constructor, render , componentDidMount 
- Update - componentDidUpdate
- Unmount - componentWillUnmount

### In Function Component

- entire lifecycle can be managed using 1 hook
- useEffect hook

- Render - useEffect Run
- Re-render -> useEffect Run (based on condition)
- UnMount -> clear function written inside useeffect

### UseEffect

- run like side effect
- use it for:
  + API Calls
  + Triggers
  + Timers
  + Logging
  + DOM Manupulation

- replaced all method of Class Compoent

### Working with Props

- props is properties
- to pass properties from Parent Component to Child Component