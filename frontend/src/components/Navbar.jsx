import React, { useState } from 'react';

const Navbar = ({ theme, toggleTheme }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <>
            <nav className="navbar glass">
                <div className="nav-content container">
                    <a href="#" className="logo">Shubham<span>.dev</span></a>
                    <ul className="nav-links">
                        <li><a href="#about">About</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#education">Education</a></li>
                        <li><a href="#certifications">Certifications</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                    <div className="nav-actions">
                        <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
                            {theme === 'dark' ? <i className="fas fa-sun"></i> : <i className="fas fa-moon"></i>}
                        </button>
                        <button className="mobile-menu-btn" aria-label="Menu" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                            <i className={isMobileMenuOpen ? "fas fa-times" : "fas fa-bars"}></i>
                        </button>
                    </div>
                </div>
            </nav>
            <div className={`mobile-menu glass ${isMobileMenuOpen ? 'active' : ''}`} id="mobile-menu">
                <ul className="mobile-nav-links">
                    <li><a href="#about" className="mobile-link" onClick={() => setIsMobileMenuOpen(false)}>About</a></li>
                    <li><a href="#skills" className="mobile-link" onClick={() => setIsMobileMenuOpen(false)}>Skills</a></li>
                    <li><a href="#projects" className="mobile-link" onClick={() => setIsMobileMenuOpen(false)}>Projects</a></li>
                    <li><a href="#education" className="mobile-link" onClick={() => setIsMobileMenuOpen(false)}>Education</a></li>
                    <li><a href="#certifications" className="mobile-link" onClick={() => setIsMobileMenuOpen(false)}>Certifications</a></li>
                    <li><a href="#contact" className="mobile-link" onClick={() => setIsMobileMenuOpen(false)}>Contact</a></li>
                </ul>
            </div>
        </>
    );
};

export default Navbar;
