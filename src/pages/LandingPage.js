// src/pages/LandingPage.js
import React from 'react';
import { Link } from 'react-router-dom'; // Importar Link para la navegación interna
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTiktok, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import '../App.css'; // Asegúrate de que los estilos globales se apliquen
import { faScissors, faPalette, faUserTie, faShirt } from '@fortawesome/free-solid-svg-icons';

const socialLinks = [
    { icon: faFacebook, name: 'Facebook', url: 'https://facebook.com/tu-pagina', color: '#1877F2' },
    { icon: faInstagram, name: 'Instagram', url: 'https://instagram.com/tu-usuario', color: '#E4405F' },
    { icon: faTiktok, name: 'TikTok', url: 'https://tiktok.com/@tu-usuario', color: '#000000' },
    { icon: faWhatsapp, name: 'WhatsApp', url: 'https://wa.me/TUNUMERODETELEFONO', color: '#25D366' },
];
const services = [
    {
        icon: faScissors,
        title: 'Sastrería a Medida',
        description: 'Creamos trajes, vestidos y prendas únicas diseñadas exclusivamente para ti, con un ajuste perfecto y materiales de la más alta calidad.',
    },
    {
        icon: faPalette,
        title: 'Diseño Exclusivo',
        description: '¿Tienes una idea? La hacemos realidad. Desde el boceto inicial hasta la prenda final, nuestro equipo de diseño te acompañará en cada paso.',
    },
    {
        icon: faShirt,
        title: 'Arreglos y Alteraciones',
        description: 'Ajustamos y modernizamos tus prendas favoritas para que te queden como un guante. Damos una nueva vida a tu guardarropa.',
    },
    {
        icon: faUserTie,
        title: 'Asesoría de Imagen',
        description: 'Te ayudamos a descubrir tu estilo personal y a construir un armario versátil que refleje tu personalidad y potencie tu imagen.',
    },
];

const LandingPage = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('¡Mensaje enviado! Gracias por contactarnos.');
        e.target.reset(); // Limpia el formulario
    };

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
                    <div className="services-page">

                        <div className="services-grid">
                            {services.map((service, index) => (
                                <div className="service-card" key={index}>
                                    <div className="service-icon-container">
                                        <FontAwesomeIcon icon={service.icon} className="service-icon" />
                                    </div>
                                    <h3>{service.title}</h3>
                                    <p>{service.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Portfolio Section */}
                    {/* <h2 className="section-title">Portfolio</h2>
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
                    </div> */}

                    {/* Contact Section */}
                    <h2 className="section-title">Contáctanos</h2>
                    <div className="contact-content-wrapper" style={{ padding: '0 16px 40px' }}>
                        <section className="contact-form-section">
                            <h3>Envíanos un Mensaje</h3>

                            <form
                                action="https://formspree.io/f/xjkoprbd"
                                method="POST"
                                className="contact-form"
                            >
                                <div className="input-group">
                                    <label htmlFor="name">Nombre</label>
                                    <input type="text" id="name" name="name" placeholder="Tu nombre completo" required />
                                </div>
                                <div className="input-group">
                                    <label htmlFor="email">Correo Electrónico</label>
                                    <input type="email" id="email" name="email" placeholder="tu.correo@ejemplo.com" required />
                                </div>
                                <div className="input-group">
                                    <label htmlFor="message">Mensaje</label>
                                    <textarea id="message" name="message" rows="6" placeholder="¿En qué podemos ayudarte?" required></textarea>
                                </div>
                                <button type="submit" className="login-form-button">Enviar Mensaje</button>
                            </form>

                        </section>

                        <aside className="contact-social-section">
                            <h3>Síguenos</h3>
                            <p>Mantente al día con nuestras últimas creaciones y noticias.</p>
                            <div className="social-media-links">
                                {socialLinks.map(social => (
                                    <a
                                        key={social.name}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="social-link-item"
                                        style={{ '--social-color': social.color }}
                                    >
                                        <FontAwesomeIcon icon={social.icon} className="social-icon" />
                                        <span>{social.name}</span>
                                    </a>
                                ))}
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
            <footer className="footer">
                <p>&copy; 2025 Taller de Modas. Todos los derechos reservados.</p>
            </footer>
        </div>
    );
};

export default LandingPage;