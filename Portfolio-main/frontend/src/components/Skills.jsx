import React from 'react';
import { motion } from 'framer-motion';
import { Code2, MonitorSmartphone, Database, Wrench, Lightbulb } from 'lucide-react';

const ProgressBar = ({ label, percentage }) => (
    <div className="skill-item">
        <div className="skill-info"><span>{label}</span></div>
        <div className="progress-line" style={{ background: 'rgba(128,128,128,0.15)', overflow: 'hidden', borderRadius: '10px' }}>
            <motion.span 
                className="progress" 
                initial={{ width: 0 }}
                whileInView={{ width: `${percentage}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                style={{ background: 'linear-gradient(90deg, var(--primary-color), var(--accent-color))', display: 'block', height: '10px', borderRadius: '10px' }}
            />
        </div>
    </div>
);

const MarqueeList = ({ items }) => {
    // Duplicate items enough times to ensure seamless infinite scroll
    const duplicated = [...items, ...items, ...items, ...items];
    return (
        <div style={{ overflow: 'hidden', whiteSpace: 'nowrap', width: '100%', position: 'relative', marginTop: '1rem' }}>
            <motion.div
                animate={{ x: ['0%', '-25%'] }}
                transition={{ ease: "linear", duration: 10, repeat: Infinity }}
                style={{ display: 'inline-flex', gap: '1rem', width: 'max-content' }}
            >
                {duplicated.map((item, idx) => (
                    <span key={idx} className="tag" style={{ display: 'inline-block' }}>
                        {item}
                    </span>
                ))}
            </motion.div>
        </div>
    );
};

const Skills = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    return (
        <section className="skills section" id="skills">
            <div className="container">
                <motion.h2 
                    className="section-title"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    Technical <span className="gradient-text">Skills</span>
                </motion.h2>
                
                <motion.div 
                    className="skills-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    
                    <motion.div className="skill-category glass-card" variants={cardVariants} whileHover={{ y: -5 }}>
                        <div className="category-header">
                            <Code2 size={28} className="text-primary" style={{ color: 'var(--primary-color)' }} />
                            <h3>Languages</h3>
                        </div>
                        <div className="skill-bars">
                            <ProgressBar label="C++" percentage={90} />
                            <ProgressBar label="JavaScript" percentage={85} />
                            <ProgressBar label="Python" percentage={80} />
                            <ProgressBar label="Java" percentage={70} />
                            <ProgressBar label="PHP" percentage={75} />
                        </div>
                    </motion.div>

                    <motion.div className="skill-category glass-card" variants={cardVariants} whileHover={{ y: -5 }}>
                        <div className="category-header">
                            <MonitorSmartphone size={28} style={{ color: 'var(--primary-color)' }} />
                            <h3>Frontend</h3>
                        </div>
                        <div className="skill-bars">
                            <ProgressBar label="React.js" percentage={85} />
                            <ProgressBar label="Tailwind CSS" percentage={90} />
                            <ProgressBar label="HTML & CSS" percentage={95} />
                        </div>
                    </motion.div>

                    <motion.div className="skill-category glass-card" variants={cardVariants} whileHover={{ y: -5 }}>
                        <div className="category-header">
                            <Database size={28} style={{ color: 'var(--primary-color)' }} />
                            <h3>Backend & DB</h3>
                        </div>
                        <div className="skill-bars">
                            <ProgressBar label="Node.js" percentage={80} />
                            <ProgressBar label="MongoDB" percentage={85} />
                            <ProgressBar label="MySQL" percentage={80} />
                            <ProgressBar label="PHP" percentage={70} />
                        </div>
                    </motion.div>

                    <motion.div className="skill-category glass-card" variants={cardVariants} whileHover={{ y: -5 }}>
                        <div className="category-header">
                            <Wrench size={28} style={{ color: 'var(--primary-color)' }} />
                            <h3>Tools</h3>
                        </div>
                        <MarqueeList items={['Git', 'GitHub', 'VS Code', 'Postman', 'Figma']} />
                    </motion.div>

                    <motion.div className="skill-category glass-card" variants={cardVariants} whileHover={{ y: -5 }}>
                        <div className="category-header">
                            <Lightbulb size={28} style={{ color: 'var(--primary-color)' }} />
                            <h3>Soft Skills</h3>
                        </div>
                        <MarqueeList items={['Problem Solving', 'Teamwork', 'Adaptability', 'Quick Learner', 'Communication']} />
                    </motion.div>

                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
