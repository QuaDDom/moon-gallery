import { useEffect, useRef } from "react"
import { NavLink } from "react-router-dom"
import './ResponsiveNav.scss'

export default function ResponsiveNav({isOpen, setIsOpen}) {
    const navigation = useRef(null);


    useEffect(()=>{
        if(isOpen){
            navigation.current.style.height = "auto"
        }
    })

    const handleClick = ()=> setIsOpen(null);

    return (
        <nav className="responsiveNavigation" ref={navigation}>
            <NavLink
            exact
            to="/"
            className="navLinkRes" 
            activeClassName="activeNavLinkRes"
            onClick={handleClick}
            >Home</NavLink>
            <NavLink
             exact
             to="/upload"
             className="navLinkRes"
             activeClassName="activeNavLinkRes"
             onClick={handleClick}
            >Upload</NavLink>
            <NavLink
             exact
             to="/login"
             className="navLinkRes"
             activeClassName="activeNavLinkRes"
             onClick={handleClick}
            >Login</NavLink>
        </nav>
    )
}
