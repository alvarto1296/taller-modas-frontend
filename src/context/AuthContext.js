// src/context/AuthContext.js
import React, { createContext, useState, useContext, useEffect, useCallback } from 'react'; // Importa useCallback

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

    // Función unificada para almacenar datos de autenticación
    // Se usa useCallback para evitar renderizados innecesarios y para que pueda ser una dependencia de useEffect
    const storeAuthData = useCallback((jwtToken, userData) => {
        localStorage.setItem('isAuthenticated', 'true');
        localStorage.setItem('user', JSON.stringify({ username: userData })); // Guarda el nombre de usuario como objeto { username: "..." }
        localStorage.setItem('token', jwtToken);

        setIsAuthenticated(true);
        setUser({ username: userData });
        setToken(jwtToken);
        console.log("AuthContext: Datos de autenticación almacenados.");
    }, []); // Dependencias vacías porque no depende de props o estados externos

    // No necesitamos un useEffect separado para sincronizar con localStorage *si*
    // las funciones `storeAuthData` y `logout` son las únicas que modifican los estados `isAuthenticated`, `user`, `token`.
    // La inicialización ya lee de localStorage.
    // El useEffect que tenías antes está bien si quieres una doble verificación,
    // pero `storeAuthData` y `logout` ya manipulan directamente `localStorage`.
    // Por simplicidad, lo dejo como lo tenías, pero el useCallback es crucial para `storeAuthData`.
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


    // Función para realizar el login local
    const login = async (username, password) => {
        try {
            const response = await fetch(API_LOGIN_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ userName: username, password: password }),
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Datos de login regular recibidos:', data);

                const receivedToken = data.jwt; // Asumiendo que el login local devuelve 'jwt'
                const receivedUserName = data.user; // Asumiendo que el login local devuelve 'user'

                // Usamos la función unificada para almacenar los datos
                storeAuthData(receivedToken, receivedUserName); 
                return true; // Login exitoso
            } else {
                const errorData = await response.json();
                console.error('Error de autenticación:', errorData.message || response.statusText);
                setIsAuthenticated(false);
                setUser(null);
                setToken(null);
                throw new Error(errorData.message || 'Credenciales inválidas');
            }
        } catch (error) {
            console.error('Error al intentar iniciar sesión:', error);
            setIsAuthenticated(false);
            setUser(null);
            setToken(null);
            throw new Error('No se pudo conectar con el servidor. Inténtalo de nuevo más tarde.');
        }
    };

    // Función para el logout
    const logout = useCallback(() => {
        setIsAuthenticated(false);
        setUser(null);
        setToken(null);
        localStorage.removeItem('isAuthenticated');
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        console.log("AuthContext: Sesión cerrada.");
    }, []); // Dependencias vacías, no depende de props o estados externos

    return (
        <AuthContext.Provider value={{ isAuthenticated, user, token, login, logout, storeAuthData }}>
            {children}
        </AuthContext.Provider>
    );
};

// Hook personalizado para usar el contexto de autenticación
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};