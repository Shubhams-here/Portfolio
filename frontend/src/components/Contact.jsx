import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '', email: '', subject: '', message: ''
    });
    const [status, setStatus] = useState('idle');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');
        try {
            const response = await fetch('http://localhost:5000/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', subject: '', message: '' });
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
        setTimeout(() => setStatus('idle'), 5000);
    };

    const fadeUp = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <section className="contact section" id="contact">
            <div className="container">
                <motion.h2 
                    className="section-title text-center"
                    initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                >
                    Get In <span className="gradient-text">Touch</span>
                </motion.h2>
                
                <div className="contact-wrapper">
                    <motion.div 
                        className="contact-info"
                        initial="hidden" whileInView="visible" viewport={{ once: true }}
                        variants={{
                            visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
                            hidden: { opacity: 0 }
                        }}
                    >
                        <motion.div className="contact-card glass-card" variants={fadeUp} whileHover={{ y: -5, scale: 1.02 }}>
                            <div className="icon-box" style={{ color: 'var(--primary-color)' }}><Mail size={32} /></div>
                            <h3>Email Me</h3>
                            <p><a href="mailto:shubhamsinghrajput7809@gmail.com">shubhamsinghrajput7809@gmail.com</a></p>
                        </motion.div>
                        <motion.div className="contact-card glass-card" variants={fadeUp} whileHover={{ y: -5, scale: 1.02 }}>
                            <div className="icon-box" style={{ color: 'var(--primary-color)' }}><Phone size={32} /></div>
                            <h3>Call Me</h3>
                            <p><a href="tel:+917011783087">+91 7011783087</a></p>
                        </motion.div>
                        <motion.div className="contact-card glass-card" variants={fadeUp} whileHover={{ y: -5, scale: 1.02 }}>
                            <div className="icon-box" style={{ color: 'var(--primary-color)' }}><MapPin size={32} /></div>
                            <h3>Location</h3>
                            <p>India</p>
                        </motion.div>
                    </motion.div>

                    <motion.form 
                        className="contact-form glass-card" 
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, type: "spring" }}
                        style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', padding: '2.5rem' }}
                    >
                        <div className="form-group">
                            <input type="text" id="name" required placeholder="Your Name" value={formData.name} onChange={handleChange} 
                                style={{ width: '100%', padding: '1rem', borderRadius: '12px', border: '1px solid var(--glass-border)', background: 'rgba(128,128,128,0.05)', color: 'var(--text-color)', fontSize: '1rem', outline: 'none', transition: 'box-shadow 0.3s' }}
                                onFocus={(e) => e.target.style.boxShadow = '0 0 0 2px var(--primary-color)'}
                                onBlur={(e) => e.target.style.boxShadow = 'none'}
                            />
                        </div>
                        <div className="form-group">
                            <input type="email" id="email" required placeholder="Your Email" value={formData.email} onChange={handleChange} 
                                style={{ width: '100%', padding: '1rem', borderRadius: '12px', border: '1px solid var(--glass-border)', background: 'rgba(128,128,128,0.05)', color: 'var(--text-color)', fontSize: '1rem', outline: 'none', transition: 'box-shadow 0.3s' }}
                                onFocus={(e) => e.target.style.boxShadow = '0 0 0 2px var(--primary-color)'}
                                onBlur={(e) => e.target.style.boxShadow = 'none'}
                            />
                        </div>
                        <div className="form-group">
                            <input type="text" id="subject" required placeholder="Subject" value={formData.subject} onChange={handleChange} 
                                style={{ width: '100%', padding: '1rem', borderRadius: '12px', border: '1px solid var(--glass-border)', background: 'rgba(128,128,128,0.05)', color: 'var(--text-color)', fontSize: '1rem', outline: 'none', transition: 'box-shadow 0.3s' }}
                                onFocus={(e) => e.target.style.boxShadow = '0 0 0 2px var(--primary-color)'}
                                onBlur={(e) => e.target.style.boxShadow = 'none'}
                            />
                        </div>
                        <div className="form-group">
                            <textarea id="message" rows="5" required placeholder="Your Message" value={formData.message} onChange={handleChange}
                                style={{ width: '100%', padding: '1rem', borderRadius: '12px', border: '1px solid var(--glass-border)', background: 'rgba(128,128,128,0.05)', color: 'var(--text-color)', fontSize: '1rem', outline: 'none', resize: 'vertical', transition: 'box-shadow 0.3s' }}
                                onFocus={(e) => e.target.style.boxShadow = '0 0 0 2px var(--primary-color)'}
                                onBlur={(e) => e.target.style.boxShadow = 'none'}
                            ></textarea>
                        </div>

                        {status !== 'idle' && (
                            <div style={{ padding: '10px', borderRadius: '8px', textAlign: 'center', fontWeight: 'bold',
                                background: status === 'error' ? 'rgba(255, 0, 0, 0.1)' : status === 'success' ? 'rgba(0, 255, 0, 0.1)' : 'transparent',
                                color: status === 'error' ? '#ff4d4d' : status === 'success' ? '#4dff4d' : 'var(--text-muted)'
                            }}>
                                {status === 'loading' ? 'Sending...' : status === 'success' ? 'Message sent successfully!' : 'Error sending message.'}
                            </div>
                        )}

                        <motion.button 
                            type="submit" 
                            className="btn btn-primary w-100" 
                            disabled={status === 'loading'}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            style={{ display: 'flex', justifyContent: 'center', gap: '10px', alignItems: 'center', border: 'none' }}
                        >
                            {status === 'loading' ? 'Sending...' : 'Send Message'} <Send size={20} />
                        </motion.button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
