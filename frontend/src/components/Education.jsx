import React from 'react';

const Education = () => {
    return (
        <section className="education section" id="education">
            <div className="container">
                <div className="dual-columns">
                    {/* Education */}
                    <div className="column reveal">
                        <h2 className="section-title">Education</h2>
                        <div className="timeline">
                            <div className="timeline-item glass-card">
                                <div className="timeline-dot"></div>
                                <div className="timeline-content">
                                    <h3>Lovely Professional University</h3>
                                    <h4>Bachelor of Technology in Computer Science and Engineering</h4>
                                    <span className="timeline-date">2023 – Present | CGPA: 7.8</span>
                                </div>
                            </div>
                        </div>
                        
                        <h3 className="mt-4 mb-4 timeline-content h3" style={{ fontSize: '1.8rem', fontWeight: 700 }}>Training</h3>
                        <div className="timeline">
                            <div className="timeline-item glass-card">
                                <div className="timeline-dot"></div>
                                <div className="timeline-content">
                                    <h3>Mastering Data Structures & Algorithms</h3>
                                    <h4>C++ Programming</h4>
                                    <p>Completed intensive training focused on arrays, linked lists, stacks, queues, recursion, sorting, and searching. Developed a Gym Management System using OOP and file handling.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Achievements & Certs */}
                    <div className="column reveal reveal-right" id="certifications">
                        <h2 className="section-title" style={{ marginBottom: '2rem' }}>Achievements <span className="gradient-text">&</span> Certifications</h2>
                        
                        <div className="achievement-list glass-card mb-4">
                            <ul>
                                <li><i className="fas fa-trophy highlight"></i> Secured <strong>Top 5% Rank</strong> in NPTEL Exam</li>
                            </ul>
                        </div>

                        <div className="certifications-grid">
                            <div className="cert-card glass-card">
                                <i className="fas fa-certificate"></i>
                                <p>Computational Theory: Language Principles & Finite Automata Theory</p>
                                <span>Infosys</span>
                                <div style={{ fontSize: '0.85rem', marginTop: '0.8rem', opacity: 0.8 }}>Covered automata theory, formal languages, and computability.</div>
                            </div>
                            <div className="cert-card glass-card">
                                <i className="fas fa-certificate"></i>
                                <p>ChatGPT Prompt Engineering</p>
                                <span>Infosys</span>
                                <div style={{ fontSize: '0.85rem', marginTop: '0.8rem', opacity: 0.8 }}>Learned to craft effective prompts for AI models to automate tasks.</div>
                            </div>
                            <div className="cert-card glass-card">
                                <i className="fas fa-cloud"></i>
                                <p>Cloud Computing</p>
                                <span>NPTEL</span>
                                <div style={{ fontSize: '0.85rem', marginTop: '0.8rem', opacity: 0.8 }}>Understood cloud architecture, services, and deployment models.</div>
                            </div>
                            <div className="cert-card glass-card">
                                <i className="fas fa-network-wired"></i>
                                <p>Peer-to-Peer Protocols and LANs</p>
                                <span>Coursera</span>
                                <div style={{ fontSize: '0.85rem', marginTop: '0.8rem', opacity: 0.8 }}>Studied network topologies, LAN protocols, and P2P communication.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
