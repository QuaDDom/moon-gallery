import { NavLink } from "react-router-dom"
import './ResponsiveNav.scss'

export default function ResponsiveNav() {
    return (
        <nav className="responsiveNavigation">
            <NavLink exact to="/" className="navLinkRes" activeClassName="activeNavLinkRes">Home</NavLink>
            <NavLink exact to="/upload" className="navLinkRes" activeClassName="activeNavLinkRes">Upload</NavLink>
            <NavLink exact to="/login" className="navLinkRes" activeClassName="activeNavLinkRes">Login</NavLink>
        </nav>
    )
}
