// src/pages/LoginPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import '../App.css';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { login } = useAuth(); // Obtener la función login del contexto

    const handleSubmit = async (e) => { // ¡ASEGÚRATE DE QUE ES 'async'!
        e.preventDefault();
        setError(''); // Limpiar errores anteriores
        try {
            const success = await login(username, password); // Await para esperar la promesa
            if (success) {
                console.log('Login exitoso, redirigiendo a /landing'); // Para depuración
                navigate('/landing'); // <-- Esta es la línea clave de redirección
            } else {
                // Si `login` devuelve false (aunque con el actual `AuthContext` si hay error, lanza excepción)
                // Esto podría ser útil si tu `login` no lanza excepción sino que retorna `false` en caso de fallo
                setError('Credenciales inválidas. Por favor, inténtalo de nuevo.');
            }
        } catch (err) {
            // Capturar errores lanzados por la función `login` (ej. problemas de conexión, errores del servidor)
            console.error('Error durante el login:', err); // Para depuración
            setError(err.message || 'Ocurrió un error inesperado al iniciar sesión.');
        }
    };

    return (
        // ... (resto del JSX del LoginPage)
        <div className="login-container">
            <div className="login-box">
                <h2>Iniciar Sesión</h2>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="username">Usuario:</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Contraseña:</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    {error && <p className="error-message">{error}</p>}
                    <button type="submit" className="login-button">Entrar</button>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;