import React from 'react';

const Skills = () => {
    return (
        <section className="skills section" id="skills">
            <div className="container">
                <h2 className="section-title reveal">Technical <span className="gradient-text">Skills</span></h2>
                <div className="skills-grid">
                    
                    <div className="skill-category glass-card reveal">
                        <div className="category-header">
                            <i className="fas fa-code"></i>
                            <h3>Languages</h3>
                        </div>
                        <div className="skill-bars">
                            <div className="skill-item">
                                <div className="skill-info"><span>C++</span></div>
                                <div className="progress-line"><span className="progress" style={{ width: '90%' }}></span></div>
                            </div>
                            <div className="skill-item">
                                <div className="skill-info"><span>JavaScript</span></div>
                                <div className="progress-line"><span className="progress" style={{ width: '85%' }}></span></div>
                            </div>
                            <div className="skill-item">
                                <div className="skill-info"><span>Python</span></div>
                                <div className="progress-line"><span className="progress" style={{ width: '80%' }}></span></div>
                            </div>
                            <div className="skill-item">
                                <div className="skill-info"><span>Java</span></div>
                                <div className="progress-line"><span className="progress" style={{ width: '70%' }}></span></div>
                            </div>
                            <div className="skill-item">
                                <div className="skill-info"><span>PHP</span></div>
                                <div className="progress-line"><span className="progress" style={{ width: '75%' }}></span></div>
                            </div>
                        </div>
                    </div>

                    <div className="skill-category glass-card reveal reveal-delay-1">
                        <div className="category-header">
                            <i className="fas fa-laptop-code"></i>
                            <h3>Frontend</h3>
                        </div>
                        <div className="skill-bars">
                            <div className="skill-item">
                                <div className="skill-info"><span>React.js</span></div>
                                <div className="progress-line"><span className="progress" style={{ width: '85%' }}></span></div>
                            </div>
                            <div className="skill-item">
                                <div className="skill-info"><span>Tailwind CSS</span></div>
                                <div className="progress-line"><span className="progress" style={{ width: '90%' }}></span></div>
                            </div>
                            <div className="skill-item">
                                <div className="skill-info"><span>HTML & CSS</span></div>
                                <div className="progress-line"><span className="progress" style={{ width: '95%' }}></span></div>
                            </div>
                        </div>
                    </div>

                    <div className="skill-category glass-card reveal reveal-delay-2">
                        <div className="category-header">
                            <i className="fas fa-server"></i>
                            <h3>Backend & DB</h3>
                        </div>
                        <div className="skill-bars">
                            <div className="skill-item">
                                <div className="skill-info"><span>Node.js</span></div>
                                <div className="progress-line"><span className="progress" style={{ width: '80%' }}></span></div>
                            </div>
                            <div className="skill-item">
                                <div className="skill-info"><span>MongoDB</span></div>
                                <div className="progress-line"><span className="progress" style={{ width: '85%' }}></span></div>
                            </div>
                            <div className="skill-item">
                                <div className="skill-info"><span>MySQL</span></div>
                                <div className="progress-line"><span className="progress" style={{ width: '80%' }}></span></div>
                            </div>
                            <div className="skill-item">
                                <div className="skill-info"><span>PHP</span></div>
                                <div className="progress-line"><span className="progress" style={{ width: '70%' }}></span></div>
                            </div>
                        </div>
                    </div>

                    <div className="skill-category glass-card reveal">
                        <div className="category-header">
                            <i className="fas fa-tools"></i>
                            <h3>Tools</h3>
                        </div>
                        <div className="skill-tags">
                            <span className="tag">Git</span>
                            <span className="tag">GitHub</span>
                            <span className="tag">VS Code</span>
                            <span className="tag">Postman</span>
                        </div>
                    </div>

                    <div className="skill-category glass-card reveal">
                        <div className="category-header">
                            <i className="fas fa-lightbulb"></i>
                            <h3>Soft Skills</h3>
                        </div>
                        <div className="skill-tags">
                            <span className="tag">Problem Solving</span>
                            <span className="tag">Teamwork</span>
                            <span className="tag">Adaptability</span>
                            <span className="tag">Quick Learner</span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Skills;
