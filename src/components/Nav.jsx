import { NavLink } from "react-router-dom";
import './Nav.scss'

export default function Nav() {
    return (
        <header>
                <h3 className="logo">MOON<span className='logoGallery'>Gallery</span></h3>
                <div className="toggle-menu"></div>
                <nav>
                    <NavLink exact to="/" className="navLink" activeClassName="activeNavLink">Home</NavLink>
                    <NavLink exact to="/upload" className="navLink" activeClassName="activeNavLink">Upload</NavLink>
                    <NavLink exact to="/login" className="navLink" activeClassName="activeNavLink">Login</NavLink>
                </nav>
        </header>
    )
}
