import React from 'react';

const About = () => {
    return (
        <section className="about section" id="about">
            <div className="container">
                <h2 className="section-title reveal">About <span className="gradient-text">Me</span></h2>
                <div className="about-content reveal">
                    <div className="about-text glass-card">
                        <p>
                            I am a passionate <strong>Full Stack Developer</strong> currently pursuing my Bachelor of Technology in Computer Science and Engineering at Lovely Professional University.
                        </p>
                        <p>
                            My journey in software development is driven by a desire to solve complex, real-world problems using modern technologies. Whether it's crafting an intuitive, responsive user interface or engineering a resilient, high-performance backend architecture, I bring dedication and a keen eye for detail to every project.
                        </p>
                        <p>
                            I believe in lifelong learning and adaptability. Outside of writing code, you will find me participating in competitive programming, exploring cloud computing, or keeping up with the latest advancements in modern web frameworks.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
