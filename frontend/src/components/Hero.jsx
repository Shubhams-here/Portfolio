import React from 'react';

const Hero = () => {
    return (
        <header className="hero" id="hero">
            <div className="hero-bg-shapes">
                <div className="shape shape-1"></div>
                <div className="shape shape-2"></div>
                <div className="shape shape-3"></div>
            </div>
            <div className="container hero-container">
                <div className="hero-content reveal">
                    <p className="greeting">Hi, I am</p>
                    <h1 className="name">Shubham Singh</h1>
                    <h2 className="title"><span className="gradient-text">Full Stack Developer</span></h2>
                    <p className="tagline">
                        I build scalable, modern web applications and solve real-world problems. 
                        Passionate about clean code, backend efficiency, and beautiful frontend design.
                    </p>
                    <div className="hero-cta">
                        <a href="#projects" className="btn btn-primary">View Projects</a>
                        <a href="#contact" className="btn btn-secondary glass-btn">Contact Me</a>
                        <a href="https://drive.google.com/file/d/1tlyFOAe45q7AJJ8yb_XKslpLZyw4OroF/view?usp=drive_link" className="btn btn-outline" target="_blank" rel="noopener noreferrer">Download Resume</a>
                    </div>
                    <div className="social-links">
                        <a href="https://github.com/shubhams-here" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><i className="fab fa-github"></i></a>
                        <a href="https://www.linkedin.com/in/shubham69" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
                        <a href="mailto:shubhamsinghrajput7809@gmail.com" aria-label="Email"><i className="fas fa-envelope"></i></a>
                    </div>
                </div>
                <div className="hero-visual reveal reveal-right">
                    <div className="visual-container glass-card">
                        <img src="/assets/hero_avatar.png" alt="Shubham Singh" className="hero-img" />
                        <div className="floating-badge badge-1 glass-card"><i className="fab fa-react"></i></div>
                        <div className="floating-badge badge-2 glass-card"><i className="fab fa-node-js"></i></div>
                        <div className="floating-badge badge-3 glass-card"><i className="fa-solid fa-database"></i></div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Hero;
