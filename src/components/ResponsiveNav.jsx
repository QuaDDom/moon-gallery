import { useEffect, useRef } from "react"
import { NavLink } from "react-router-dom"
import './ResponsiveNav.scss'

export default function ResponsiveNav({isOpen}) {
    const navigation = useRef(null);
    useEffect(()=>{
        if(isOpen){
            navigation.current.style.height = "auto"
        }
    })
    return (
        <nav className="responsiveNavigation" ref={navigation}>
            <NavLink exact to="/" className="navLinkRes" activeClassName="activeNavLinkRes">Home</NavLink>
            <NavLink exact to="/upload" className="navLinkRes" activeClassName="activeNavLinkRes">Upload</NavLink>
            <NavLink exact to="/login" className="navLinkRes" activeClassName="activeNavLinkRes">Login</NavLink>
        </nav>
    )
}
