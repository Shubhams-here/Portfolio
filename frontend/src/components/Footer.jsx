import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="footer" style={{ borderTop: '1px solid var(--glass-border)', marginTop: '4rem', padding: '3rem 0', background: 'var(--bg-color)' }}>
            <div className="container footer-content" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem', marginBottom: '2rem' }}>
                <div className="footer-logo">
                    <a href="#" className="logo" style={{ fontSize: '1.8rem', fontWeight: 800 }}>Shubham</a>
                    <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem' }}>Building scalable, dynamic web applications.</p>
                </div>
                <div className="footer-socials" style={{ display: 'flex', gap: '1.5rem' }}>
                    <motion.a 
                        href="https://github.com/shubhams-here" target="_blank" rel="noopener noreferrer" aria-label="GitHub"
                        whileHover={{ y: -5, color: 'var(--primary-color)' }}
                        style={{ color: 'var(--text-muted)', transition: 'color 0.3s' }}
                    >
                        <Github size={28} />
                    </motion.a>
                    <motion.a 
                        href="https://www.linkedin.com/in/shubham69" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                        whileHover={{ y: -5, color: 'var(--primary-color)' }}
                        style={{ color: 'var(--text-muted)', transition: 'color 0.3s' }}
                    >
                        <Linkedin size={28} />
                    </motion.a>
                </div>
            </div>
            <div className="footer-bottom border-t" style={{ borderTop: '1px solid var(--glass-border)', paddingTop: '2rem', textAlign: 'center' }}>
                <p style={{ color: 'var(--text-muted)' }}>&copy; {new Date().getFullYear()} Shubham Singh. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
