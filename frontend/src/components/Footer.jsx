import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-content">
                <div className="footer-logo">
                    <a href="#" className="logo">Shubham<span>.dev</span></a>
                    <p>Building scalable web applications.</p>
                </div>
                <div className="footer-socials">
                    <a href="https://github.com/shubhams-here" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><i className="fab fa-github"></i></a>
                    <a href="https://www.linkedin.com/in/shubham69" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Shubham Singh. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
