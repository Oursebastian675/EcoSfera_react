import React from "react";
import Logo from "../assets/logoEcoSfera.png";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import { useState } from "react";
import "./Encabezado.css";
import SelectorDeCategorias from "./Categorias";
import { useCarShop } from './CarShop';

function Encabezado() {
    const navigate = useNavigate();
    const { cartItems, removeFromCart, clearCart } = useCarShop();
    const [showCartMenu, setShowCartMenu] = useState(false);

    const handleSearchClick = () => {
        // Implementar la funcionalidad de búsqueda aquí
        console.log('Búsqueda clickeada!');
    };

    return (
        <header className="encabezado">
            <div className="contenedor">
                <div className="cabecera">
                <Link className="Inicio_cabe" to="/"> 
                    <div className="logo" >
                    <img  src={Logo} alt="Logo EcoSfera" />
                    </div>
                    <div className="titulo">
                        <p>Eco</p>
                    </div>
                    <div className="titulo2">
                        <span>Sfera</span>
                    </div>
                    </Link>

                    {/* Buscador */}
                    <div className="group">
                        <svg
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                            className="icon"
                            onClick={handleSearchClick}
                        >
                            <g>
                                <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
                            </g>
                        </svg>
                        <input
                            className="input"
                            type="search"
                            placeholder="Search"
                            onClick={handleSearchClick} // Optional: Adding search functionality
                        />
                    </div>
                    
<SelectorDeCategorias />




                    

                    {/* Botón Blog */}
                    <Link className="btn-donate" to="/blog">Blog</Link>

                    {/* Botón para ingresar */}
                    <Link className="button" to="/login">Ingresar</Link>

                    {/* Carrito de compras */}
                    <div className="carrito-container" 
                        onMouseEnter={() => setShowCartMenu(true)}
                        onMouseLeave={() => setShowCartMenu(false)}>
                        <button className="carrito-btn">
                            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="16.5" cy="18.5" r="1.5"/>
                                <circle cx="9.5" cy="18.5" r="1.5"/>
                                <path d="M18 16H8a1 1 0 0 1-.958-.713L4.256 6H3a1 1 0 0 1 0-2h2a1 1 0 0 1 .958.713L6.344 6H21a1 1 0 0 1 .937 1.352l-3 8A1 1 0 0 1 18 16zm-9.256-2h8.563l2.25-6H6.944z"/>
                            </svg>
                            {cartItems.length > 0 && (
                                <span className="cart-count">{cartItems.length}</span>
                            )}
                        </button>
                        {showCartMenu && (
                            <div className="carrito-menu">
                                <div className="carrito-productos">
                                    {cartItems.length === 0 ? (
                                        <div className="carrito-vacio">El carrito está vacío</div>
                                    ) : (
                                        cartItems.map(item => (
                                            <div key={item.id} className="carrito-producto">
                                                <img src={item.imagen} alt={item.nombre} />
                                                <div className="carrito-producto-info">
                                                    <div className="carrito-producto-nombre">{item.nombre}</div>
                                                    <div className="carrito-producto-precio">${item.precio}</div>
                                                    <div className="carrito-producto-cantidad">Cantidad: {item.quantity}</div>
                                                </div>
                                                <button 
                                                    className="carrito-producto-eliminar"
                                                    onClick={() => removeFromCart(item.id)}
                                                >
                                                    ×
                                                </button>
                                            </div>
                                        ))
                                    )}
                                </div>
                                <div className="carrito-acciones">
                                    <button className="carrito-opcion" onClick={clearCart}>Vaciar carrito</button>
                                    <button className="carrito-opcion comprar">Comprar</button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Encabezado;
