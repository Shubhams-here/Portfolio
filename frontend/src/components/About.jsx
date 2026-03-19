import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section className="about section" id="about" style={{ position: 'relative', zIndex: 1 }}>
            {/* Background glowing blob for depth */}
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '60vw',
                height: '60vw',
                background: 'radial-gradient(circle, var(--accent-color) 0%, transparent 60%)',
                opacity: 0.05,
                zIndex: -1,
                pointerEvents: 'none',
                filter: 'blur(100px)'
            }} />
            
            <div className="container">
                <motion.h2 
                    className="section-title"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    About <span className="gradient-text">Me</span>
                </motion.h2>
                
                <motion.div 
                    className="about-content"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
                >
                    <div className="about-text glass-card" style={{ padding: '4rem', fontSize: '1.2rem', lineHeight: '1.8' }}>
                        <p style={{ marginBottom: '1.5rem' }}>
                            I am a passionate <strong>Full Stack Developer</strong> currently pursuing my Bachelor of Technology in Computer Science and Engineering at Lovely Professional University.
                        </p>
                        <p style={{ marginBottom: '1.5rem' }}>
                            My journey in software development is driven by a desire to solve complex, real-world problems using modern technologies. Whether it's crafting an intuitive, responsive user interface or engineering a resilient, high-performance backend architecture, I bring dedication and a keen eye for detail to every project.
                        </p>
                        <p>
                            I believe in lifelong learning and adaptability. Outside of writing code, you will find me participating in competitive programming, exploring cloud computing, or keeping up with the latest advancements in modern web frameworks.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
