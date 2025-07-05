// src/pages/ProductPage.js
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';
import '../App.css';

const ProductPage = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Datos de ejemplo para simular una API
    const exampleProducts = [
        { id: 1, name: 'Camisa de Lino', description: 'Fresca y ligera, ideal para verano.', price: 35.99, imageUrl: 'https://via.placeholder.com/150/FF5733/FFFFFF?text=Camisa' },
        { id: 2, name: 'Pantalón Chino', description: 'Clásico y versátil, para cualquier ocasión.', price: 49.99, imageUrl: 'https://via.placeholder.com/150/33FF57/FFFFFF?text=Pantalon' },
        { id: 3, name: 'Vestido Floral', description: 'Elegante vestido con estampado de flores.', price: 65.00, imageUrl: 'https://via.placeholder.com/150/5733FF/FFFFFF?text=Vestido' },
        { id: 4, name: 'Chaqueta Vaquera', description: 'Un clásico atemporal para tu guardarropa.', price: 79.99, imageUrl: 'https://via.placeholder.com/150/FF33E9/FFFFFF?text=Chaqueta' },
        { id: 5, name: 'Falda Plisada', description: 'Falda de moda, cómoda y chic.', price: 42.50, imageUrl: 'https://via.placeholder.com/150/33E9FF/FFFFFF?text=Falda' },
        { id: 6, name: 'Sudadera con Capucha', description: 'Suave y cómoda para el día a día.', price: 55.00, imageUrl: 'https://via.placeholder.com/150/E9FF33/FFFFFF?text=Sudadera' },
    ];

    useEffect(() => {
        // En una aplicación real, aquí harías una llamada a tu API de Spring Boot
        // para obtener la lista de productos, por ejemplo:
        // fetch('/api/productos')
        //   .then(response => {
        //     if (!response.ok) {
        //       throw new Error(`HTTP error! status: ${response.status}`);
        //     }
        //     return response.json();
        //   })
        //   .then(data => {
        //     setProducts(data);
        //     setLoading(false);
        //   })
        //   .catch(error => {
        //     setError(error);
        //     setLoading(false);
        //   });

        // Simulación de carga de datos
        const fetchProducts = () => {
            setTimeout(() => {
                setProducts(exampleProducts);
                setLoading(false);
            }, 1000); // Simula un retraso de 1 segundo
        };

        fetchProducts();
    }, []); // El array vacío asegura que se ejecute solo una vez al montar

    if (loading) {
        return (
            <div className="products-page">
                <Navbar />
                <div className="loading-message">Cargando productos...</div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="products-page">
                <Navbar />
                <div className="error-message">Error al cargar los productos: {error.message}</div>
            </div>
        );
    }

    return (
        <div className="products-page">
            <Navbar />
            <div className="products-header">
                <h1>Nuestros Productos</h1>
                <p>Descubre lo último en moda para ti.</p>
            </div>
            <div className="product-grid">
                {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
            <footer className="footer">
                <p>&copy; 2025 Taller de Modas. Todos los derechos reservados.</p>
            </footer>
        </div>
    );
};

export default ProductPage;