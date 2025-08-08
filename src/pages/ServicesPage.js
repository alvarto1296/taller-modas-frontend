// src/pages/ServicesPage.js
import React from 'react';
import Navbar from '../components/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faScissors, faPalette, faUserTie, faShirt } from '@fortawesome/free-solid-svg-icons';
import '../App.css';

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

const ServicesPage = () => {
    return (
        <div className="services-page">
            <Navbar />
            <div className="services-header">
                <h1>Nuestros Servicios</h1>
                <p>Excelencia y dedicación en cada puntada.</p>
            </div>
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
            <footer className="footer">
                <p>&copy; 2025 Taller de Modas. Todos los derechos reservados.</p>
            </footer>
        </div>
    );
};

export default ServicesPage;