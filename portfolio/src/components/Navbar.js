import { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
        <nav>
            <div id="desktop-nav">
                <div className="logo">Jinah Yoo</div>
                <ul className="nav-links">
                    <li><Link to="about" smooth={true} duration={500}>About</Link></li>
                    <li><Link to="project" smooth={true} duration={500}>Project</Link></li>
                    <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
                </ul>
            </div>
        </nav>

        <nav>
            <div id="hamburger-nav">
                <div className="logo">Jinah Yoo</div>
                <div className="hamburger-menu">
                    <div className={`hamburger-icon ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className={`menu-links ${menuOpen ? "open" : ""}`}>
                        <li><Link to="about" smooth={true} duration={500} onClick={toggleMenu}>About</Link></li>
                        <li><Link to="project" smooth={true} duration={500} onClick={toggleMenu}>Project</Link></li>
                        <li><Link to="contact" smooth={true} duration={500} onClick={toggleMenu}>Contact</Link></li>
                    </div>
                </div>
            </div>
        </nav>
        </>
    );
};

export default Navbar;
