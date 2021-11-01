import { NavLink } from "react-router-dom";
import { Squash as Hamburger } from 'hamburger-react';
import './Nav.scss'
import { useEffect, useState } from "react";
import ResponsiveNav from "./ResponsiveNav";
import { useMediaQuery } from "react-responsive";

export default function Nav() {
    const [isOpen, setIsOpen] = useState(false);

    const visibilityResponsiveMenu = useMediaQuery({
        query: '(max-width: 768px)'
    })

    return (
        <>
        <header>
                <h3 className="logo">MOON<span className='logoGallery'>Gallery</span></h3>
                {
                    visibilityResponsiveMenu &&
                    <div className="toggle-menu">
                        <Hamburger color="#e99001" toggle={setIsOpen} toggled={isOpen}/>
                    </div>
                }
                {
                    visibilityResponsiveMenu ||
                    <nav className="navigation">
                    <NavLink exact to="/" className="navLink" activeClassName="activeNavLink">Home</NavLink>
                    <NavLink exact to="/upload" className="navLink" activeClassName="activeNavLink">Upload</NavLink>
                    <NavLink exact to="/login" className="navLink" activeClassName="activeNavLink">Login</NavLink>
                    </nav>
                }
        </header>
        {
            isOpen  && <ResponsiveNav isOpen={isOpen}/> 
        }
        </>
    )
}
