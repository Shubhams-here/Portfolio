import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    const stagger = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
    };

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
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={stagger}
                >
                    {/* Main About Text */}
                    <motion.div variants={fadeUp} className="about-text glass-card" style={{ padding: '3rem 4rem', fontSize: '1.15rem', lineHeight: '1.9', marginBottom: '2rem' }}>
                        <p style={{ marginBottom: '1.5rem' }}>
                            I am a passionate <strong>Full Stack Developer</strong> currently pursuing my Bachelor of Technology in Computer Science and Engineering at <strong>Lovely Professional University</strong>. With a strong foundation in both frontend and backend technologies, I specialize in building scalable, production-ready web applications that deliver exceptional user experiences.
                        </p>
                        <p style={{ marginBottom: '1.5rem' }}>
                            My journey in software development is driven by a desire to solve complex, real-world problems using modern technologies. From crafting pixel-perfect, responsive user interfaces with <strong>React.js</strong> and <strong>Tailwind CSS</strong> to engineering resilient backend architectures with <strong>Node.js</strong> and <strong>MongoDB</strong>, I bring dedication and a keen eye for detail to every project I undertake.
                        </p>
                        <p style={{ marginBottom: '1.5rem' }}>
                            I have hands-on experience developing full-stack applications including <strong>real-time communication platforms</strong> using WebRTC and Socket.io, <strong>e-commerce auction systems</strong>, and <strong>cultural preservation platforms</strong>. Each project has strengthened my ability to architect clean, maintainable codebases while adhering to industry best practices.
                        </p>
                        <p>
                            I believe in lifelong learning and staying at the forefront of technology. When I'm not writing code, you'll find me solving <strong>Data Structures & Algorithms</strong> problems, exploring <strong>cloud computing</strong> architectures, or contributing to open-source projects. I'm actively seeking opportunities to collaborate on impactful projects and grow as a software engineer.
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
