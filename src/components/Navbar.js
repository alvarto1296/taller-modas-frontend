// src/components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useAuth } from '../context/AuthContext';
import logo from '../rgs.png'; // Importamos el logo desde la carpeta assets
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
                <Link to="/landing"><img src={logo} alt="Fashion Studio Logo" className="navbar-logo" /></Link>
            </div>
            <div className="menu-icon" onClick={toggleMenu}>
                <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
            </div>
            <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
                <li><Link to="/landing" onClick={toggleMenu}>Home</Link></li>
                <li><Link to="/services" onClick={toggleMenu}>Services</Link></li>
                <li><Link to="/portfolio" onClick={toggleMenu}>Portfolio</Link></li>
                <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
                {isAuthenticated ? (
                    <>
                        <li><span className="welcome-user">Hola, {user.username}</span></li>
                        <li><Link to="/" onClick={() => { logout(); toggleMenu(); }}>Log Out</Link></li>
                    </>
                ) : (
                    <li><Link to="/" className="nav-login-btn" onClick={toggleMenu}>Log In</Link></li>
                )}
            </ul>
        </nav>
    );
};

export default Navbar;