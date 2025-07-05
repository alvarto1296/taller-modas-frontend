// src/components/ProductCard.js
import React from 'react';
import '../App.css'; // Para los estilos de la tarjeta

const ProductCard = ({ product }) => {
    return (
        <div className="product-card">
            <img src={product.imageUrl || 'https://via.placeholder.com/150'} alt={product.name} className="product-image" />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-description">{product.description}</p>
            <p className="product-price">${product.price.toFixed(2)}</p>
            <button className="add-to-cart-btn">Agregar al Carrito</button>
        </div>
    );
};

export default ProductCard;