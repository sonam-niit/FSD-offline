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