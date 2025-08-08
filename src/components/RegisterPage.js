// src/pages/RegisterPage.js
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../App.css'; // Importa tus estilos generales

const RegisterPage = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');          // Limpia mensajes anteriores
        setSuccessMessage('');  // Limpia mensajes anteriores

        if (password !== confirmPassword) {
            setError('Las contraseñas no coinciden.');
            return;
        }

        try {
            const response = await fetch('http://localhost:8080/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json', // Sigue enviando JSON al backend
                },
                body: JSON.stringify({
                    userName: userName,
                    password: password,
                }),
            });

            // Aquí es donde cambia: esperamos una respuesta de texto, no JSON
            let message = '';
            try {
                message = await response.text(); // Lee la respuesta como texto
            } catch (textError) {
                console.warn('La respuesta del servidor no se pudo leer como texto:', textError);
                message = response.statusText || 'Respuesta no válida del servidor';
            }

            if (response.ok) { // Status 200-299
                setSuccessMessage(message || '¡Cuenta creada con éxito! Por favor, inicia sesión.');
                // Redirigir al login después de un breve tiempo
                setTimeout(() => {
                    navigate('/login');
                }, 2000);
            } else { // Status fuera del rango 200-299 (ej. 400, 401, 500)
                // Mostrar el mensaje de error del backend si existe, de lo contrario un mensaje genérico
                setError(message || 'Error al crear la cuenta. Por favor, inténtalo de nuevo.');
            }
        } catch (err) {
            console.error('Error durante el registro:', err);
            // Esto atrapa errores de red (ej. servidor no disponible)
            if (err instanceof TypeError && err.message.includes('Failed to fetch')) {
                setError('No se pudo conectar al servidor. Asegúrate de que el backend esté funcionando.');
            } else {
                setError('Ocurrió un error inesperado al crear la cuenta.');
            }
        }
    };

    return (
        <div className="login-page-container">
            <div className="login-box">
                <h2>Create an account</h2>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="userName">Username</label>
                        <input
                            type="text"
                            id="userName"
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                            placeholder="Enter your username"
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            placeholder="Confirm your password"
                            required
                        />
                    </div>

                    {/* Mostrar mensajes de error o éxito */}
                    {error && <p className="error-message">{error}</p>}
                    {successMessage && <p className="success-message">{successMessage}</p>}
                    
                    <button type="submit" className="login-form-button">Sign Up</button>
                    
                    <div className="create-account">
                        Already have an account? <Link to="/login">Log In</Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RegisterPage;