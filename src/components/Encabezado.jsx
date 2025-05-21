import React from "react";
import Logo from "../assets/logoEcoSfera.png";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import { useState } from "react";
import "./Encabezado.css";
import SelectorDeCategorias from "./Categorias";
import addToCart from "../helpers/funciones";

function Encabezado() {
    const navigate = useNavigate();
    const [showCartMenu, setShowCartMenu] = useState(false);

    const handleSearchClick = () => {
        // Implement search functionality here
        console.log('Search clicked!');
    };

    const handleLoginClick = () => {
        navigate('/login'); // Assuming '/login' is the login route
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
                            🛒
                        </button>
                        {showCartMenu && (
                            <div className="carrito-menu">
                                <div className="carrito-opcion">Vaciar carrito</div>
                                <div className="carrito-opcion">Comprar</div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Encabezado;
