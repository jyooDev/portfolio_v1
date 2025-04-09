import { useState } from "react";
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
        <nav>
            <div id="desktop-nav">
                
                <div className="logo"><RouterLink to="">Jinah Yoo</RouterLink></div>
                <ul className="nav-links">
                    <li><ScrollLink to="about" smooth={true} duration={500}>About</ScrollLink></li>
                    <li><ScrollLink to="project" smooth={true} duration={500}>Project</ScrollLink></li>
                    <li><ScrollLink to="contact" smooth={true} duration={500}>Contact</ScrollLink></li>
                    <li><RouterLink to="blog">Blog</RouterLink></li>
                </ul>
            </div>
        </nav>

        <nav>
            <div id="hamburger-nav">
                <div className="logo"><RouterLink to="">Jinah Yoo</RouterLink></div>
                <div className="hamburger-menu">
                    <div className={`hamburger-icon ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className={`menu-links ${menuOpen ? "open" : ""}`}>
                        <li><ScrollLink to="about" smooth={true} duration={500} onClick={toggleMenu}>About</ScrollLink></li>
                        <li><ScrollLink to="project" smooth={true} duration={500} onClick={toggleMenu}>Project</ScrollLink></li>
                        <li><ScrollLink to="contact" smooth={true} duration={500} onClick={toggleMenu}>Contact</ScrollLink></li>
                        <li><RouterLink to="blog" onClick={toggleMenu}>Blog</RouterLink></li>
                    </div>
                </div>
            </div>
        </nav>
        </>
    );
};

export default Navbar;
