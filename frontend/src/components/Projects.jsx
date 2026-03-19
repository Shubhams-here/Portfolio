import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: "Dabba Drop",
            type: "Food Tech Platform",
            description: "A scalable full-stack food delivery platform that allows users to browse menus, place orders, and track deliveries in real time. Implemented secure authentication, efficient order management, and optimized database queries.",
            tech: ["React.js", "Redux", "Node.js", "Express.js", "MongoDB", "Socket.io"],
            github: "https://github.com/Shubhams-here/Dabba-Drop",
            image: "/assets/dabba_drop.png"
        },
        {
            title: "Rriwaz",
            type: "E-Commerce Platform",
            description: "A premium full-stack e-commerce platform specializing in authentic ethnic wear. It features a fluid user interface, seamless product browsing, secure cart management, and a highly responsive design tailored for an exceptional shopping experience.",
            tech: ["React", "JavaScript", "Web Development"],
            github: "https://github.com/Shubhams-here/Rriwaz",
            demo: "https://Rriwaz.com",
            image: "/assets/Rriwaz.png"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.3 } }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    return (
        <section className="projects section" id="projects">
            <div className="container">
                <motion.h2 
                    className="section-title text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    Featured <span className="gradient-text">Projects</span>
                </motion.h2>

                <motion.div 
                    className="projects-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    {projects.map((project, index) => (
                        <motion.div 
                            key={index}
                            className="project-card glass-card"
                            variants={cardVariants}
                            whileHover={{ y: -10, boxShadow: 'var(--card-shadow-hover)' }}
                        >
                            <div className="project-img-wrapper">
                                <motion.img 
                                    src={project.image} 
                                    alt={project.title} 
                                    className="project-img"
                                    whileHover={{ scale: 1.08 }}
                                    transition={{ duration: 0.4 }}
                                />
                                <div className="project-overlay" style={{ backdropFilter: 'blur(8px)' }}>
                                    <div style={{ display: 'flex', gap: '1rem' }}>
                                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="overlay-btn" style={{ fontSize: '0.9rem', padding: '0.6rem 1.2rem' }}>
                                            <Github size={18} /> Code
                                        </a>
                                        {project.demo && (
                                            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="overlay-btn" style={{ background: 'var(--secondary-color)', color: 'var(--bg-color)', fontSize: '0.9rem', padding: '0.6rem 1.2rem' }}>
                                                <ExternalLink size={18} /> Visit
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="project-content">
                                <div className="project-header">
                                    <h3>{project.title}</h3>
                                    <span className="project-type">{project.type}</span>
                                </div>
                                <p className="project-desc">{project.description}</p>
                                <div className="project-tech">
                                    {project.tech.map((tech, i) => (
                                        <span key={i} className="tag">{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
