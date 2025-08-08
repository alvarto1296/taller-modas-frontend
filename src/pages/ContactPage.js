// src/pages/ContactPage.js
import React from 'react';
import Navbar from '../components/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTiktok, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import '../App.css';
import './ContactPage.css'; // Importar los estilos específicos de la página

const socialLinks = [
    { icon: faFacebook, name: 'Facebook', url: 'https://facebook.com/tu-pagina', color: '#1877F2' },
    { icon: faInstagram, name: 'Instagram', url: 'https://instagram.com/tu-usuario', color: '#E4405F' },
    { icon: faTiktok, name: 'TikTok', url: 'https://tiktok.com/@tu-usuario', color: '#000000' },
    { icon: faWhatsapp, name: 'WhatsApp', url: 'https://wa.me/TUNUMERODETELEFONO', color: '#25D366' },
];

const ContactPage = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes agregar la lógica para enviar el formulario a un servicio
        alert('¡Mensaje enviado! Gracias por contactarnos.');
        e.target.reset(); // Limpia el formulario
    };

    return (
        <div className="contact-page">
            <Navbar />
            <div className="contact-header">
                <h1>Contáctanos</h1>
                <p>Estamos aquí para ayudarte. Rellena el formulario o encuéntranos en redes sociales.</p>
            </div>

            <main className="contact-content-wrapper">
                <section className="contact-form-section">
                    <h2>Envíanos un Mensaje</h2>

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
                    <h2>Síguenos</h2>
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
            </main>

            <footer className="footer">
                <p>&copy; 2025 Taller de Modas. Todos los derechos reservados.</p>
            </footer>
        </div>
    );
};

export default ContactPage;