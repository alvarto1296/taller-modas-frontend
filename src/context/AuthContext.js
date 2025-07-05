// src/context/AuthContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';

// Crea el contexto de autenticación
const AuthContext = createContext(null);

// URL de tu endpoint de login
const API_LOGIN_URL = 'http://localhost:8080/auth/login';

// Proveedor de autenticación
export const AuthProvider = ({ children }) => {
    // Inicializa el estado de autenticación y usuario desde localStorage
    // Esto permite que el usuario permanezca logeado si cierra y abre el navegador
    const [isAuthenticated, setIsAuthenticated] = useState(() => {
        return localStorage.getItem('isAuthenticated') === 'true';
    });
    const [user, setUser] = useState(() => {
        const storedUser = localStorage.getItem('user');
        return storedUser ? JSON.parse(storedUser) : null;
    });
    const [token, setToken] = useState(() => {
        return localStorage.getItem('token');
    });

    // Efecto para sincronizar el estado con localStorage
    useEffect(() => {
        localStorage.setItem('isAuthenticated', isAuthenticated);
        if (user) {
            localStorage.setItem('user', JSON.stringify(user));
        } else {
            localStorage.removeItem('user');
        }
        if (token) {
            localStorage.setItem('token', token);
        } else {
            localStorage.removeItem('token');
        }
    }, [isAuthenticated, user, token]);

    // Función para realizar el login
    const login = async (username, password) => {
        try {
            const response = await fetch(API_LOGIN_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ userName: username, password: password }),
            });

            // Verificar si la respuesta fue exitosa (código 2xx)
            if (response.ok) {
                const data = await response.json();
                // Asumiendo que tu backend devuelve un objeto con 'token' y 'userName'
                // ajusta esto según la respuesta real de tu API
                const receivedToken = data.token; // Por ejemplo, si tu token viene en una propiedad 'token'
                const receivedUserName = data.userName; // O el nombre de usuario de la respuesta

                setIsAuthenticated(true);
                setUser({ username: receivedUserName || username }); // Usar el username de la respuesta o el enviado
                setToken(receivedToken); // Almacena el token
                return true; // Login exitoso
            } else {
                // Manejar errores de respuesta del servidor (ej. 401 Unauthorized, 400 Bad Request)
                const errorData = await response.json(); // Intentar parsear el cuerpo del error
                console.error('Error de autenticación:', errorData.message || response.statusText);
                setIsAuthenticated(false);
                setUser(null);
                setToken(null);
                throw new Error(errorData.message || 'Credenciales inválidas'); // Propagar el error
            }
        } catch (error) {
            // Manejar errores de red o cualquier otra excepción
            console.error('Error al intentar iniciar sesión:', error);
            setIsAuthenticated(false);
            setUser(null);
            setToken(null);
            throw new Error('No se pudo conectar con el servidor. Inténtalo de nuevo más tarde.');
        }
    };

    // Función para el logout
    const logout = () => {
        setIsAuthenticated(false);
        setUser(null);
        setToken(null); // Limpiar el token al cerrar sesión
        // Limpiar también del almacenamiento local
        localStorage.removeItem('isAuthenticated');
        localStorage.removeItem('user');
        localStorage.removeItem('token');
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, user, token, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// Hook personalizado para usar el contexto de autenticación
export const useAuth = () => {
    return useContext(AuthContext);
};