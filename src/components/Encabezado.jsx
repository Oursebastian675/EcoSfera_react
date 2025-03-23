import React from "react";
import Logo from "../assets/logoEcoSfera.png";
import { Link, useNavigate } from 'react-router-dom';

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
                    <div className="Logo">
                        <img src={Logo} alt="LogoEcoSfera" />
                    </div>
                    <div className="titulo"><p>Eco</p></div>
                    <div className="titulo2"><span>Sfera</span></div>

                    <button className="cssbuttons-io" onClick={handleSearchClick}>
                        <span>
                            Busqueda
                            <svg viewBox="0 0 19.9 19.7" xmlns="http://www.w3.org/2000/svg" className="search-icon">
                                <path d="M18.5 18.3l-5.4-5.4" stroke-linecap="square"></path>
                                <circle r="7" cy="8" cx="8"></circle>
                            </svg>
                        </span>
                    </button>

                    <select className="categorias_opciones" name="categorias" id="categoria">
                        <option value="">Categorias</option>
                        <option value="aseoPersonal">Aseo personal</option>
                        <option value="hogar">Hogar</option>
                        <option value="bienestarYBelleza">Bienestar y belleza</option>
                        <option value="mascotas">Mascotas</option>
                    </select>

                    <button className="btn-donate">Blog</button>

                    <button className="button" onClick={handleLoginClick}>
                        INGRESAR
                    </button>

                    <div className="carrito_compras"></div>
                </div>
            </div>
        </header>
    );
}

export default Encabezado;
