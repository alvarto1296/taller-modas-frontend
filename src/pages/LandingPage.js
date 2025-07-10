// src/pages/LandingPage.js
import React from 'react';
import { Link } from 'react-router-dom'; // Importar Link para la navegación interna
import '../App.css'; // Asegúrate de que los estilos globales se apliquen

const LandingPage = () => {
    return (
        <div className="landing-root">
            <div className="layout-container-main">
                <div className="content-wrapper">
                    {/* Hero Section */}
                    <div className="hero-container"
                         style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://julio.com/media/catalog/product/3/3/335340_03.jpg?quality=80&bg-color=255,255,255&height=638&width=508&canvas=508:638")' }}
                    >
                        <div className="hero-content">
                            <h1 className="hero-title">
                                Crafting Your Style, Tailored to Perfection
                            </h1>
                            <h2 className="hero-subtitle">
                                Experience bespoke fashion with a Bolivian touch. From custom designs to expert tailoring, we bring your vision to life.
                            </h2>
                        </div>
                        <Link
                            to="/services"
                            className="hero-button"
                        >
                            <span className="truncate">Explore Services</span>
                        </Link>
                    </div>

                    {/* About Us Section */}
                    <h2 className="section-title">About Us</h2>
                    <p className="about-us-text">
                        At Fashion House, we blend traditional Bolivian craftsmanship with contemporary design. Our founder, Isabella Rodriguez, brings over 15 years of experience in the
                        fashion industry, creating unique pieces that reflect individual style and personality. We are committed to sustainable practices and ethical sourcing, ensuring every
                        garment is made with care and respect for our community.
                    </p>

                    {/* Our Services Section */}
                    <h2 className="section-title">Our Services</h2>
                    <div className="services-grid">
                        <div className="service-card">
                            <div className="service-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                                    <path
                                        d="M157.73,113.13A8,8,0,0,1,159.82,102L227.48,55.7a8,8,0,0,1,9,13.21l-67.67,46.3a7.92,7.92,0,0,1-4.51,1.4A8,8,0,0,1,157.73,113.13Zm80.87,85.09a8,8,0,0,1-11.12,2.08L136,137.7,93.49,166.78a36,36,0,1,1-9-13.19L121.83,128,84.44,102.41a35.86,35.86,0,1,1,9-13.19l143,97.87A8,8,0,0,1,238.6,198.22ZM80,180a20,20,0,1,0-5.86,14.14A19.85,19.85,0,0,0,80,180ZM74.14,90.13a20,20,0,1,0-28.28,0A19.85,19.85,0,0,0,74.14,90.13Z"
                                    ></path>
                                </svg>
                            </div>
                            <div className="service-details">
                                <h2 className="service-title">Tailoring</h2>
                                <p className="service-description">Expert alterations and tailoring to ensure a perfect fit for any garment.</p>
                            </div>
                        </div>
                        <div className="service-card">
                            <div className="service-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                                    <path
                                        d="M227.31,73.37,182.63,28.68a16,16,0,0,0-22.63,0L36.69,152A15.86,15.86,0,0,0,32,163.31V208a16,16,0,0,0,16,16H92.69A15.86,15.86,0,0,0,104,219.31L227.31,96a16,16,0,0,0,0-22.63ZM51.31,160,136,75.31,152.69,92,68,176.68ZM48,179.31,76.69,208H48Zm48,25.38L79.31,188,164,103.31,180.69,120Zm96-96L147.31,64l24-24L216,84.68Z"
                                    ></path>
                                </svg>
                            </div>
                            <div className="service-details">
                                <h2 className="service-title">Custom Designs</h2>
                                <p className="service-description">
                                    Collaborative design process to create unique, bespoke pieces tailored to your exact specifications.
                                </p>
                            </div>
                        </div>
                        <div className="service-card">
                            <div className="service-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                                    <path
                                        d="M235.32,73.37,182.63,20.69a16,16,0,0,0-22.63,0L20.68,160a16,16,0,0,0,0,22.63l52.69,52.68a16,16,0,0,0,22.63,0L235.32,96A16,16,0,0,0,235.32,73.37ZM84.68,224,32,171.31l32-32,26.34,26.35a8,8,0,0,0,11.32-11.32L75.31,128,96,107.31l26.34,26.35a8,8,0,0,0,11.32-11.32L107.31,96,128,75.31l26.34,26.35a8,8,0,0,0,11.32-11.32L139.31,64l32-32L224,84.69Z"
                                    ></path>
                                </svg>
                            </div>
                            <div className="service-details">
                                <h2 className="service-title">Consultations</h2>
                                <p className="service-description">Personalized consultations to discuss your style, preferences, and design ideas.</p>
                            </div>
                        </div>
                    </div>

                    {/* Portfolio Section */}
                    <h2 className="section-title">Portfolio</h2>
                    <div className="portfolio-grid">
                        <div className="portfolio-item">
                            <div className="portfolio-image"
                                 style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1598554904265-d017601f016f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")' }}
                            ></div>
                        </div>
                        <div className="portfolio-item">
                            <div className="portfolio-image"
                                 style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1555529718-d9d1502446ed?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")' }}
                            ></div>
                        </div>
                        <div className="portfolio-item">
                            <div className="portfolio-image"
                                 style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1617154247493-2720d297926e?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")' }}
                            ></div>
                        </div>
                        <div className="portfolio-item">
                            <div className="portfolio-image"
                                 style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1549611200-36a4d7c71e2c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")' }}
                            ></div>
                        </div>
                        <div className="portfolio-item">
                            <div className="portfolio-image"
                                 style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1552550117-64539829e023?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")' }}
                            ></div>
                        </div>
                        <div className="portfolio-item">
                            <div className="portfolio-image"
                                 style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1621243171120-d38b55c6e864?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")' }}
                            ></div>
                        </div>
                    </div>

                    {/* Contact Section */}
                    <h2 className="section-title">Contact</h2>
                    <div className="contact-form-container">
                        <label className="form-group">
                            <input
                                placeholder="Your Name"
                                className="form-input"
                                value=""
                            />
                        </label>
                    </div>
                    <div className="contact-form-container">
                        <label className="form-group">
                            <input
                                placeholder="Your Email"
                                className="form-input"
                                value=""
                            />
                        </label>
                    </div>
                    <div className="contact-form-container">
                        <label className="form-group">
                            <textarea
                                placeholder="Your Message"
                                className="form-input text-area"
                            ></textarea>
                        </label>
                    </div>
                    <div className="contact-button-container">
                        <button
                            className="send-message-button"
                        >
                            <span className="truncate">Send Message</span>
                        </button>
                    </div>
                </div>
            </div>
            {/* Footer de Stitch Design */}
            <footer className="landing-footer-container">
                <div className="landing-footer-content">
                    <div className="landing-footer-links">
                        <Link to="/privacy-policy" className="footer-link">Privacy Policy</Link>
                        <Link to="/terms-of-service" className="footer-link">Terms of Service</Link>
                    </div>
                    <div className="landing-social-links">
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                            <div className="social-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                                    <path
                                        d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"
                                    ></path>
                                </svg>
                            </div>
                        </a>
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                            <div className="social-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                                    <path
                                        d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm8,191.63V152h24a8,8,0,0,0,0-16H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,0-16H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0,0,16h24v63.63a88,88,0,1,1,16,0Z"
                                    ></path>
                                </svg>
                            </div>
                        </a>
                    </div>
                    <p className="footer-copyright">© 2024 Fashion House. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default LandingPage;