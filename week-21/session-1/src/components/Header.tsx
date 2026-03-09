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