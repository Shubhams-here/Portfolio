import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Code, Database, Terminal } from 'lucide-react';

const Hero = () => {
    // Animation variants
    const fadeInUp = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };
    
    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    return (
        <header className="hero" id="hero">
            <div className="hero-bg-shapes">
                <div className="shape shape-1"></div>
                <div className="shape shape-2"></div>
                <div className="shape shape-3"></div>
            </div>
            
            <div className="container hero-container">
                <motion.div 
                    className="hero-content"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <motion.p variants={fadeInUp} className="greeting">Hi, I am</motion.p>
                    <motion.h1 variants={fadeInUp} className="name">Shubham Singh</motion.h1>
                    <motion.h2 variants={fadeInUp} className="title">
                        <span className="gradient-text">Full Stack Developer</span>
                    </motion.h2>
                    <motion.p variants={fadeInUp} className="tagline">
                        I build scalable, modern web applications and solve real-world problems. 
                        Passionate about clean code, backend efficiency, and beautiful frontend design.
                    </motion.p>
                    
                    <motion.div variants={fadeInUp} className="hero-cta">
                        <a href="#projects" className="btn btn-primary">View Projects</a>
                        <a href="#contact" className="btn btn-secondary glass-btn">Contact Me</a>
                        <a href="https://drive.google.com/file/d/1tlyFOAe45q7AJJ8yb_XKslpLZyw4OroF/view?usp=drive_link" className="btn btn-outline" target="_blank" rel="noopener noreferrer">Download Resume</a>
                    </motion.div>
                    
                    <motion.div variants={fadeInUp} className="social-links">
                        <a href="https://github.com/shubhams-here" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github size={26} strokeWidth={1.5} color="var(--primary-color)" /></a>
                        <a href="https://www.linkedin.com/in/shubham69" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={26} strokeWidth={1.5} color="var(--accent-color)" /></a>
                        <a href="mailto:shubhamsinghrajput7809@gmail.com" aria-label="Email"><Mail size={26} strokeWidth={1.5} color="#ea4335" /></a>
                    </motion.div>
                </motion.div>
                
                <motion.div 
                    className="hero-visual"
                    initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
                    whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                    transition={{ duration: 1, type: "spring", bounce: 0.4 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02, rotateY: 5 }}
                >
                    <div className="visual-container glass-card" style={{ padding: '0.5rem' }}>
                        <img src="/assets/hero_avatar.png" alt="Shubham Singh" className="hero-img" />
                        
                        {/* 3D Floating Badges with Framer Motion */}
                        <motion.div 
                            className="floating-badge badge-1 glass-card"
                            animate={{ y: [-10, 10, -10] }}
                            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                        >
                            <Code color="#61DAFB" size={32} />
                        </motion.div>
                        <motion.div 
                            className="floating-badge badge-2 glass-card"
                            animate={{ y: [10, -10, 10] }}
                            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                        >
                            <Terminal color="#339933" size={32} />
                        </motion.div>
                        <motion.div 
                            className="floating-badge badge-3 glass-card"
                            animate={{ y: [-15, 5, -15] }}
                            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                        >
                            <Database color="#00758F" size={32} />
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </header>
    );
};

export default Hero;
