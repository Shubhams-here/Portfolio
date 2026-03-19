import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X } from 'lucide-react';

const Navbar = ({ theme, toggleTheme }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navLinks = [
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Projects", href: "#projects" },
        { name: "Education", href: "#education" },
        { name: "Certifications", href: "#certifications" },
        { name: "Contact", href: "#contact" }
    ];

    return (
        <>
            <motion.nav 
                className="navbar glass"
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
            >
                <div className="nav-content container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <motion.a href="#" className="logo" whileHover={{ scale: 1.05 }}>
                    </motion.a>
                    
                    <ul className="nav-links">
                        {navLinks.map((link) => (
                            <motion.li key={link.name} whileHover={{ y: -2 }}>
                                <a href={link.href}>{link.name}</a>
                            </motion.li>
                        ))}
                    </ul>
                    
                    <div className="nav-actions" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <motion.button 
                            className="theme-toggle" 
                            onClick={toggleTheme} 
                            aria-label="Toggle theme"
                            whileHover={{ rotate: 90 }}
                            whileTap={{ scale: 0.9 }}
                            style={{ background: 'transparent', border: 'none', color: 'var(--text-color)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                        >
                            {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
                        </motion.button>
                        
                        <button 
                            className="mobile-menu-btn" 
                            aria-label="Menu" 
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            style={{ background: 'transparent', border: 'none', color: 'var(--text-color)', cursor: 'pointer', alignItems: 'center', justifyContent: 'center' }}
                        >
                            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </motion.nav>

            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div 
                        className="mobile-menu glass active" 
                        id="mobile-menu"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "100vh", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        style={{ position: 'fixed', top: '70px', left: 0, width: '100%', zIndex: 999, overflow: 'hidden' }}
                    >
                        <ul className="mobile-nav-links" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem', marginTop: '3rem' }}>
                            {navLinks.map((link) => (
                                <motion.li 
                                    key={link.name}
                                    initial={{ x: -50, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    exit={{ x: -50, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <a href={link.href} className="mobile-link" onClick={() => setIsMobileMenuOpen(false)} style={{ fontSize: '1.5rem', fontWeight: 600 }}>
                                        {link.name}
                                    </a>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
