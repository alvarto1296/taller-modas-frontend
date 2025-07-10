// src/pages/LoginPage.js
import React, { useState, useEffect } from 'react'; // Importa useEffect
import { useNavigate, Link, useLocation } from 'react-router-dom'; // Importa useLocation
import { useAuth } from '../context/AuthContext';
import '../App.css';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { login, storeAuthData } = useAuth(); // Asume que tienes una función storeAuthData en tu AuthContext
    const location = useLocation(); // Hook para acceder a la URL

    // Manejar la redirección de OAuth2 cuando el componente se monta
    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const token = params.get('token');
        const user = params.get('user'); // El nombre de usuario/email que el backend te envía

        if (token && user) {
            console.log('Token y usuario recibidos de OAuth2:', { token, user });
            // Almacena el token y el usuario en tu contexto de autenticación
            // Esto reemplaza lo que harías después de un login normal
            storeAuthData(token, user); // Asegúrate de que esta función exista en tu AuthContext
            
            // Limpia los parámetros de la URL para que no queden expuestos
            navigate('/landing', { replace: true }); // Redirige y reemplaza la entrada en el historial
        }
    }, [location, navigate, storeAuthData]); // Dependencias para el useEffect

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            const success = await login(username, password);
            if (success) {
                console.log('Login exitoso, redirigiendo a /landing');
                navigate('/landing');
            } else {
                setError('Credenciales inválidas. Por favor, inténtalo de nuevo.');
            }
        } catch (err) {
            console.error('Error durante el login:', err);
            setError(err.message || 'Ocurrió un error inesperado al iniciar sesión.');
        }
    };

    const handleGoogleLogin = () => {
        // Redirige al backend para iniciar el flujo de OAuth2 con Google
        window.location.href = 'http://localhost:8080/oauth2/authorization/google';
    };

    return (
        <div className="login-page-container">
            <div className="login-box">
                <h2>Welcome Back</h2>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="username">Username or Email</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Enter your username or email"
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
                    <div className="forgot-password">
                        <Link to="/forgot-password">Forgot Password?</Link>
                    </div>
                    {error && <p className="error-message">{error}</p>}
                    <button type="submit" className="login-form-button">Log In</button>
                    <div className="create-account">
                        Don't have an account? <Link to="/register">Create Account</Link>
                    </div>
                </form>

                {/* --- Botón de Google --- */}
                <div className="separator">
                    <span>OR</span>
                </div>
                <button
                    type="button"
                    className="google-login-button"
                    onClick={handleGoogleLogin}
                >
                    <img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="Google icon" />
                    Sign in with Google
                </button>
                {/* --- Fin Botón de Google --- */}
            </div>
        </div>
    );
};

export default LoginPage;