# Props Drilling

- App
  - Dashboard
     - Profile
        - Avatar

- if Avtar component required a data from app or dashboard then we have to pass via props
- passing from app -> dash -> profile -> avatar (PropsDrilling)

![PropDrilling](imagesnotes/propdrilling.png)

**Problems**

- too many props
- difficult to maintain
- components which don't require data still we need to pass via it.

## Solution: Context

- Reactb Context helping us to share data globally.

- Shopping Cart App requires cart data
  - in Cart Component
  - in checkout component
  - in all product page for add item in cart

- same state required to access in multiple components 

![Context](imagesnotes/context.png)

## Let's implement

- create folder named context
- create file ThemeContext.tsx

```tsx
import { createContext } from "react";

type ThemeContextType = {
    theme: string;
    toggleTheme: () =>void
}
export const ThemeContext = createContext<ThemeContextType|null>(null);
```

- ThemeProvider.tsx under context folder

```tsx
import { useState } from "react"
import { ThemeContext } from "./ThemeContext"

type Props={
    children: React.ReactNode
}
export const ThemeProvider=({children}:Props)=>{
    const [theme,setTheme] = useState("light")

    const toggleTheme=()=>{
        setTheme(theme==="light"?"dark":"light")
    }

    return (
        <ThemeContext.Provider value={{theme,toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}
```

- update main.tsx to add provider

```tsx
import { ThemeProvider } from './context/ThemeProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
)
```
- to apply css create file style.css under src/comnponent folder

```css
.light{
    background-color: white;
    color: black;
}
.dark{
    background-color: black;
    color: white;
}
```
- use inside Header Component (Header.tsx)

```tsx
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import './style.css'
function Header() {
    const context = useContext(ThemeContext);

    if (!context) return null;
    const { theme } = context //destructing
    return (
        <div className={theme}>
            <h2>Header Component</h2>
            <h3>Theme: {theme}</h3>
        </div>
    );
}

export default Header;
```

- to chnage the theme used Dashboard component

```tsx
import { useContext } from "react";
import Profile from "./Profile";
import { ThemeContext } from "../context/ThemeContext";

function Dashboard() {
    const user = {name: "Sonam Soni"}

    const context = useContext(ThemeContext);
    if(!context) return null;

    const {toggleTheme} = context; //destructing 
    return ( 
        <div style={{border:"2px solid red", padding:"10px"}}>
            <h3>Dashboard Component</h3>
            <Profile name={user.name} />

            <button onClick={toggleTheme}>Change Theme</button>
        </div>
     );
}

export default Dashboard;
```
- means we are using same context in Header as well as Dashboard without using props
