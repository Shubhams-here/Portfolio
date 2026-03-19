import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Cloud, Network } from 'lucide-react';

const Education = () => {
    const fadeUp = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    return (
        <section className="education section" id="education">
            <div className="container">
                <div className="dual-columns">
                    {/* Education Column */}
                    <motion.div 
                        className="column"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <motion.h2 variants={fadeUp} className="section-title">Education</motion.h2>
                        <motion.div variants={fadeUp} className="timeline">
                            <motion.div className="timeline-item glass-card" whileHover={{ x: 10 }}>
                                <div className="timeline-dot" style={{ boxShadow: '0 0 10px var(--primary-color)' }}></div>
                                <div className="timeline-content">
                                    <h3>Lovely Professional University</h3>
                                    <h4>Bachelor of Technology in Computer Science and Engineering</h4>
                                    <span className="timeline-date">2023 – Present | CGPA: 7.8</span>
                                </div>
                            </motion.div>
                        </motion.div>
                        
                        <motion.h3 variants={fadeUp} className="mt-4 mb-4 timeline-content h3" style={{ fontSize: '1.8rem', fontWeight: 700 }}>Training</motion.h3>
                        <motion.div variants={fadeUp} className="timeline">
                            <motion.div className="timeline-item glass-card" whileHover={{ x: 10 }}>
                                <div className="timeline-dot" style={{ boxShadow: '0 0 10px var(--primary-color)' }}></div>
                                <div className="timeline-content">
                                    <h3>Mastering Data Structures & Algorithms</h3>
                                    <h4>C++ Programming</h4>
                                    <p>Completed intensive training focused on arrays, linked lists, stacks, queues, recursion, sorting, and searching. Developed a Gym Management System.</p>
                                </div>
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    {/* Achievements & Certs Column */}
                    <motion.div 
                        className="column" id="certifications"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <motion.h2 variants={fadeUp} className="section-title" style={{ marginBottom: '2rem' }}>Achievements <span className="gradient-text">&</span> Certifications</motion.h2>
                        
                        <motion.div variants={fadeUp} className="achievement-list glass-card mb-4" whileHover={{ scale: 1.02 }}>
                            <ul style={{ padding: 0 }}>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', listStyle: 'none' }}>
                                    <Trophy size={28} color="#f59e0b" /> 
                                    <span>Secured <strong>Top 5% Rank</strong> in NPTEL Exam</span>
                                </li>
                            </ul>
                        </motion.div>

                        <div className="certifications-grid" style={{ display: 'grid', gap: '1.5rem', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
                            <motion.div variants={fadeUp} className="cert-card glass-card" style={{ padding: '1.5rem' }} whileHover={{ y: -5 }}>
                                <Award size={28} style={{ color: 'var(--primary-color)', marginBottom: '1rem' }} />
                                <p style={{ fontWeight: 600 }}>Computational Theory & Automata</p>
                                <span style={{ color: 'var(--accent-color)', fontSize: '0.9rem' }}>Infosys</span>
                                <div style={{ fontSize: '0.85rem', marginTop: '0.8rem', opacity: 0.8 }}>Covered automata theory, formal languages, and computability.</div>
                            </motion.div>
                            
                            <motion.div variants={fadeUp} className="cert-card glass-card" style={{ padding: '1.5rem' }} whileHover={{ y: -5 }}>
                                <Award size={28} style={{ color: 'var(--primary-color)', marginBottom: '1rem' }} />
                                <p style={{ fontWeight: 600 }}>ChatGPT Prompt Engineering</p>
                                <span style={{ color: 'var(--accent-color)', fontSize: '0.9rem' }}>Infosys</span>
                                <div style={{ fontSize: '0.85rem', marginTop: '0.8rem', opacity: 0.8 }}>Learned to craft effective prompts for AI models.</div>
                            </motion.div>

                            <motion.div variants={fadeUp} className="cert-card glass-card" style={{ padding: '1.5rem' }} whileHover={{ y: -5 }}>
                                <Cloud size={28} style={{ color: 'var(--primary-color)', marginBottom: '1rem' }} />
                                <p style={{ fontWeight: 600 }}>Cloud Computing</p>
                                <span style={{ color: 'var(--accent-color)', fontSize: '0.9rem' }}>NPTEL</span>
                                <div style={{ fontSize: '0.85rem', marginTop: '0.8rem', opacity: 0.8 }}>Understood cloud architecture and deployment models.</div>
                            </motion.div>

                            <motion.div variants={fadeUp} className="cert-card glass-card" style={{ padding: '1.5rem' }} whileHover={{ y: -5 }}>
                                <Network size={28} style={{ color: 'var(--primary-color)', marginBottom: '1rem' }} />
                                <p style={{ fontWeight: 600 }}>P2P Protocols and LANs</p>
                                <span style={{ color: 'var(--accent-color)', fontSize: '0.9rem' }}>Coursera</span>
                                <div style={{ fontSize: '0.85rem', marginTop: '0.8rem', opacity: 0.8 }}>Studied network topologies, LAN protocols, and P2P.</div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Education;
