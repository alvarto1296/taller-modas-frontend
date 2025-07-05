// src/pages/LandingPage.js
import React from 'react';
import Navbar from '../components/Navbar';
import { useAuth } from '../context/AuthContext';
import '../App.css';

const LandingPage = () => {
    const { user } = useAuth();

    return (
        <div className="landing-page">
            <Navbar />
            <div className="landing-content">
                <h1>Bienvenido a tu Tienda de Modas, {user ? user.username : 'invitado'}!</h1>
                <p>Explora nuestras últimas colecciones y encuentra tu estilo.</p>
                <div className="landing-actions">
                    <a href="/products" className="btn-primary">Ver Productos</a>
                    {/* Puedes añadir más botones o contenido aquí */}
                </div>
            </div>
            <footer className="footer">
                <p>&copy; 2025 Taller de Modas. Todos los derechos reservados.</p>
            </footer>
        </div>
    );
};

export default LandingPage;