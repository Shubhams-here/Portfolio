import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '', email: '', subject: '', message: ''
    });
    const [status, setStatus] = useState('idle'); // idle, loading, success, error
    const [statusMessage, setStatusMessage] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const response = await fetch('http://localhost:5000/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const result = await response.json();
            
            if (response.ok) {
                setStatus('success');
                setStatusMessage('Message sent successfully!');
                setFormData({ name: '', email: '', subject: '', message: '' });
            } else {
                setStatus('error');
                setStatusMessage(result.message || 'Error sending message');
            }
        } catch (error) {
            console.error('Submission error:', error);
            setStatus('error');
            setStatusMessage('Failed to connect to the server');
        }

        setTimeout(() => {
            setStatus('idle');
            setStatusMessage('');
        }, 5000);
    };

    return (
        <section className="contact section" id="contact">
            <div className="container">
                <h2 className="section-title text-center reveal">Get In <span className="gradient-text">Touch</span></h2>
                <div className="contact-wrapper">
                    <div className="contact-info reveal">
                        <div className="contact-card glass-card">
                            <div className="icon-box"><i className="fas fa-envelope"></i></div>
                            <h3>Email Me</h3>
                            <p><a href="mailto:shubhamsinghrajput7809@gmail.com">shubhamsinghrajput7809@gmail.com</a></p>
                        </div>
                        <div className="contact-card glass-card">
                            <div className="icon-box"><i className="fas fa-phone"></i></div>
                            <h3>Call Me</h3>
                            <p><a href="tel:+917011783087">+91 7011783087</a></p>
                        </div>
                        <div className="contact-card glass-card">
                            <div className="icon-box"><i className="fas fa-map-marker-alt"></i></div>
                            <h3>Location</h3>
                            <p>India</p>
                        </div>
                    </div>

                    <form className="contact-form glass-card reveal reveal-delay-1" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input type="text" id="name" required placeholder="Your Name" value={formData.name} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <input type="email" id="email" required placeholder="Your Email" value={formData.email} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <input type="text" id="subject" required placeholder="Subject" value={formData.subject} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <textarea id="message" rows="5" required placeholder="Your Message" value={formData.message} onChange={handleChange}></textarea>
                        </div>
                        
                        {statusMessage && (
                            <div className={`form-status ${status}`} style={{
                                padding: '10px', 
                                marginBottom: '15px', 
                                borderRadius: '5px',
                                background: status === 'error' ? 'rgba(255, 0, 0, 0.1)' : 'rgba(0, 255, 0, 0.1)',
                                color: status === 'error' ? '#ff4d4d' : '#4dff4d',
                                textAlign: 'center'
                            }}>
                                {statusMessage}
                            </div>
                        )}

                        <button type="submit" className="btn btn-primary w-100" disabled={status === 'loading'}>
                            {status === 'loading' ? 'Sending...' : 'Send Message'} <i className="fas fa-paper-plane"></i>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
