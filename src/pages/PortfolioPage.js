// src/pages/PortfolioPage.js
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import '../App.css';

// Datos estáticos que simulan una futura API
const portfolioItems = [
    {
        id: 1,
        title: 'Traje de Novio a Medida',
        category: 'Sastrería Masculina',
        imageUrl: 'https://images.pexels.com/photos/3779789/pexels-photo-3779789.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        details: 'Traje de tres piezas en lana merino súper 120s, con corte slim fit y solapas de pico. Forro interior de seda personalizado y botones de cuerno natural.'
    },
    {
        id: 2,
        title: 'Vestido de Gala "Cielo Nocturno"',
        category: 'Alta Costura Femenina',
        imageUrl: 'https://images.pexels.com/photos/1468379/pexels-photo-1468379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        details: 'Vestido largo de noche en terciopelo de seda azul profundo, con bordados de cristales Swarovski simulando un cielo estrellado. Espalda descubierta y cola de sirena.'
    },
    {
        id: 3,
        title: 'Abrigo de Tweed Clásico',
        category: 'Prendas de Abrigo',
        imageUrl: 'https://images.pexels.com/photos/1342609/pexels-photo-1342609.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        details: 'Abrigo de corte clásico confeccionado en tweed escocés. Diseño de doble botonadura con forro de cupro para mayor comodidad y calidez.'
    },
    {
        id: 4,
        title: 'Blusa de Seda con Lazo',
        category: 'Diseño Femenino',
        imageUrl: 'https://images.pexels.com/photos/985635/pexels-photo-985635.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        details: 'Blusa elegante en crêpe de Chine de seda, con un lazo dramático en el cuello. Puños abotonados y un corte fluido que favorece la silueta.'
    },
    {
        id: 5,
        title: 'Pantalón de Lino Veraniego',
        category: 'Sastrería Casual',
        imageUrl: 'https://images.pexels.com/photos/8450335/pexels-photo-8450335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        details: 'Pantalón de lino italiano de alta calidad, perfecto para climas cálidos. Corte recto y cintura ajustable para un confort sin igual.'
    },
    {
        id: 6,
        title: 'Chaqueta de Cuero Biker',
        category: 'Diseño Personalizado',
        imageUrl: 'https://images.pexels.com/photos/1124465/pexels-photo-1124465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        details: 'Chaqueta estilo biker hecha a medida en cuero de cordero. Herrajes de plata envejecida y forro interior con un diseño exclusivo elegido por el cliente.'
    }
];

const PortfolioPage = () => {
    const [selectedItem, setSelectedItem] = useState(null);

    const openModal = (item) => {
        setSelectedItem(item);
    };

    const closeModal = () => {
        setSelectedItem(null);
    };

    return (
        <div className="portfolio-page">
            <Navbar />
            <div className="portfolio-header">
                <h1>Nuestro Portafolio</h1>
                <p>Diseños que cuentan una historia, creados con pasión y precisión.</p>
            </div>
            <div className="portfolio-grid">
                {portfolioItems.map((item) => (
                    <div className="portfolio-card" key={item.id} onClick={() => openModal(item)}>
                        <div className="portfolio-card-image-container">
                            <img src={item.imageUrl} alt={item.title} className="portfolio-card-image" />
                        </div>
                        <div className="portfolio-card-info">
                            <h3>{item.title}</h3>
                            <p>{item.category}</p>
                        </div>
                    </div>
                ))}
            </div>

            {selectedItem && (
                <div className="modal-backdrop" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close-btn" onClick={closeModal}>
                            <FontAwesomeIcon icon={faTimes} />
                        </button>
                        <img src={selectedItem.imageUrl} alt={selectedItem.title} className="modal-image" />
                        <div className="modal-details">
                            <h2>{selectedItem.title}</h2>
                            <h4>{selectedItem.category}</h4>
                            <p>{selectedItem.details}</p>
                        </div>
                    </div>
                </div>
            )}

            <footer className="footer">
                <p>&copy; 2025 Taller de Modas. Todos los derechos reservados.</p>
            </footer>
        </div>
    );
};

export default PortfolioPage;