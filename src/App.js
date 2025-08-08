import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import LandingPage from './pages/LandingPage';
import PortfolioPage from './pages/PortfolioPage';
import ServicesPage from './pages/ServicesPage';
import ProductPage from './pages/ProductPage';
import ContactPage from './pages/ContactPage';
import Navbar from './components/Navbar'; // Importar el Navbar
import { AuthProvider, useAuth } from './context/AuthContext';
import './App.css'; // Estilos globales
import RegisterPage from './components/RegisterPage';  

// Componente PrivateRoute para proteger rutas
const PrivateRoute = ({ children }) => {
    const { isAuthenticated } = useAuth();
    return isAuthenticated ? children : <Navigate to="/" />;
};

const App = () => {
    return (
        <Router>
            <AuthProvider>
                <div className="App">
                    {/* Renderizar el Navbar en todas las rutas, excepto en el login si así lo deseas */}
                    {/* Puedes añadir una lógica condicional aquí si no quieres que el Navbar aparezca en la ruta raíz */}
                    <Routes>
                        <Route path="/" element={<LoginPage />} />
                        <Route
                            path="/landing"
                            element={
                                <PrivateRoute>
                                    <Navbar /> {/* Incluye el Navbar aquí */}
                                    <LandingPage />
                                </PrivateRoute>
                            }
                        />
                        <Route
                            path="/products"
                            element={
                                <PrivateRoute>
                                    <Navbar /> {/* Incluye el Navbar aquí */}
                                    <ProductPage />
                                </PrivateRoute>
                            }
                        />
                        {/* Rutas para los nuevos enlaces del navbar (sin componentes específicos, solo como ejemplo) */}
                        <Route
                            path="/services"
                            element={
                                <PrivateRoute>
                                    <ServicesPage />
                                </PrivateRoute>
                            }
                        />
                        <Route
                            path="/portfolio"
                            element={
                                <PrivateRoute>
                                    <PortfolioPage />
                                </PrivateRoute>
                            }
                        />
                        <Route
                            path="/contact"
                            element={
                                <PrivateRoute>
                                    <ContactPage />
                                </PrivateRoute>
                            }
                        />
                        {/* <Route path="/contact" element={<PrivateRoute><Navbar /><div><h2>Contact Us</h2><p>Get in touch with us.</p></div></PrivateRoute>} />  */}
                        <Route path="/forgot-password" element={<LoginPage />} /> {/* Podrías tener un componente específico */}
                        <Route path="/register" element={<RegisterPage />} /> {/* Podrías tener un componente específico */}
                        {/* Ruta por defecto para cualquier otra URL */}
                        <Route path="*" element={<Navigate to="/" />} />
                    </Routes>
                </div>
            </AuthProvider>
        </Router>
    );
};

export default App;