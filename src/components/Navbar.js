// src/components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useAuth } from '../context/AuthContext';
import '../App.css'; // Para los estilos de la navbar y el menú

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false); // Estado para abrir/cerrar el menú
    const { isAuthenticated, user, logout } = useAuth();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/landing">Taller de Modas</Link>
            </div>
            <div className="menu-icon" onClick={toggleMenu}>
                <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
            </div>
            <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
                <li><Link to="/landing" onClick={toggleMenu}>Inicio</Link></li>
                <li><Link to="/products" onClick={toggleMenu}>Productos</Link></li>
                {isAuthenticated ? (
                    <>
                        <li><span className="welcome-user">Hola, {user.username}</span></li>
                        <li><Link to="/" onClick={() => { logout(); toggleMenu(); }}>Cerrar Sesión</Link></li>
                    </>
                ) : (
                    <li><Link to="/" onClick={toggleMenu}>Iniciar Sesión</Link></li>
                )}
                {/* Puedes añadir más enlaces aquí */}
            </ul>
        </nav>
    );
};

export default Navbar;