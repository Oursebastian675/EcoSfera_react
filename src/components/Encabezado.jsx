import React from "react";
import Logo from "../assets/logoEcoSfera.png";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

function Encabezado() {
    const navigate = useNavigate();

    const handleSearchClick = () => {
        // Implement search functionality here
        console.log('Search clicked!');
    };

    const handleLoginClick = () => {
        navigate('/login'); // Assuming '/login' is the login route
    };

    return (
        <header>
            <div className="contenedor">
                <div className="cabecera">
                    <div className="logo">
                    <img src={Logo} alt="Logo EcoSfera" />
                    </div>
                    <div className="titulo">
                        <p>Eco</p>
                    </div>
                    <div className="titulo2">
                        <span>Sfera</span>
                    </div>

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

                    {/* Selector de categorías */}
                    <div>
                    <select
                        className="categorias_opciones"
                        name="categorias"
                        id="categoria"
                    >
                        
                        <option value="">Categorías &darr;</option>
                        <option value="aseoPersonal">Aseo personal</option>
                        <option value="hogar">Hogar</option>
                        <option value="bienestarYBelleza">Bienestar y belleza</option>
                        <option value="mascotas">Mascotas</option>
                    </select>
                    </div>
                    {/* Botón Blog */}
                    <button className="btn-donate">Blog</button>

                    {/* Botón para ingresar */}
                    <Link className="button" to="/login"> 
                        INGRESAR</Link>

                    {/* Carrito de compras (vacío por ahora) */}
                    <div className="carrito_compras"></div>
                </div>
            </div>
        </header>
    );
}

export default Encabezado;
