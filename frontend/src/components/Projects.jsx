import React from 'react';

const Projects = () => {
    return (
        <section className="projects section" id="projects">
            <div className="container">
                <h2 className="section-title reveal">Featured <span className="gradient-text">Projects</span></h2>
                <div className="projects-grid">
                    
                    {/* Project 1 */}
                    <div className="project-card glass-card reveal">
                        <div className="project-img-wrapper">
                            <img src="/assets/dabba_drop.png" alt="Dabba Drop - Food Delivery" className="project-img" />
                            <div className="project-overlay">
                                <a href="https://github.com/Shubhams-here/Dabba-Drop" target="_blank" rel="noopener noreferrer" className="overlay-btn"><i className="fab fa-github"></i> GitHub</a>
                            </div>
                        </div>
                        <div className="project-content">
                            <div className="project-header">
                                <h3>Dabba Drop</h3>
                                <span className="project-type">Food Tech Platform</span>
                            </div>
                            <p className="project-desc">A scalable full-stack food delivery platform that allows users to browse menus, place orders, and track deliveries in real time. Implemented secure authentication, efficient order management, and optimized database queries for performance.</p>
                            <div className="project-tech">
                                <span>React.js</span><span>Redux</span><span>Node.js</span><span>Express.js</span><span>MongoDB</span><span>soket.io</span>
                            </div>
                        </div>
                    </div>

                    {/* Project 2 */}
                    <div className="project-card glass-card reveal reveal-delay-1">
                        <div className="project-img-wrapper">
                            <img src="/assets/interecta.png" alt="Interecta - Chat App" className="project-img" />
                            <div className="project-overlay">
                                <a href="https://github.com/Shubhams-here/Interecta-" target="_blank" rel="noopener noreferrer" className="overlay-btn"><i className="fab fa-github"></i> GitHub</a>
                            </div>
                        </div>
                        <div className="project-content">
                            <div className="project-header">
                                <h3>Interecta</h3>
                                <span className="project-type">Real-Time Chat App</span>
                            </div>
                            <p className="project-desc">A secure real-time messaging platform built using the MERN stack. Implemented encrypted communication, RESTful APIs, user session management, and efficient MongoDB storage for chat history.</p>
                            <div className="project-tech">
                                <span>React.js</span><span>Node.js</span><span>MongoDB</span><span>Express</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Projects;
