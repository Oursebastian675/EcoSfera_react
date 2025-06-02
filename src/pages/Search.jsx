import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Encabezado from "../components/Encabezado";
import Pie from "../components/Pie";
import { useCarShop } from '../components/CarShop';
import "./Productos.css";



import cafeImg from '../assets/shampoo_cafe.jpg';
import bloqueadorImg from '../assets/bloqueador.jpg';
import hiloImg from '../assets/hilo.jpg';
import pañitosImg from '../assets/pañitos.jpg';
import serumsImg from '../assets/serums.png';
import mascarillaImg from '../assets/mascarilla.jpg';
import aceiteImg from '../assets/aceite.jpg';
import cremaImg from '../assets/crema.jpg';
import rasuradoraImg from '../assets/rasuradora.jpg';
import esponjaImg from '../assets/esponja.jpg';
import desodoranteImg from '../assets/desodorante.jpg';
import snacksImg from '../assets/snacks.jpg';
import capsulasImg from '../assets/capsulas.jpg';
import sabanasImg from '../assets/sabanas.jpg';
import cestoImg from '../assets/cesto.jpg';
import cortinasImg from '../assets/cortinas.jpg';
import suavizanteImg from '../assets/suavizante.jpg';
import vajillaImg from '../assets/vajilla.jpeg';
import basuraImg from '../assets/bolsa.jpg';
import detergenteImg from '../assets/detergente.jpg';
import arenaImg from '../assets/arena_bambu.jpg';
import shampooImg from '../assets/shampoo.jpg';
import cuerdaImg from '../assets/cuerda.jpg';
import collarImg from '../assets/collar_algodon.jpeg';
import toallaImg from '../assets/toalla.jpg';
import esmalteImg from '../assets/esmalte.jpg';
import baseImg from '../assets/base.png';




function Search() {
    const [searchParams] = useSearchParams();
    const query = searchParams.get('q');
    const { addToCart } = useCarShop();
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        // Aquí deberías importar todos los productos de las diferentes categorías
        const allProducts = [
            // Productos de AseoPersonal
            { id: 101, nombre: "Aceite natural con coco", precio: 75000, imagen: aceiteImg },
            { id: 102, nombre: "Crema dental natural", precio: 10000, imagen: cremaImg },
            { id: 103, nombre: "Rasuradora inoxidable", precio: 42000, imagen: rasuradoraImg },
            { id: 104, nombre: "Shampoo de café", precio: 17000, imagen: cafeImg },
            { id: 105, nombre: "Bloqueador natural", precio: 7600, imagen: bloqueadorImg },
            { id: 106, nombre: "Hilo dental de seda natural", precio: 6500, imagen: hiloImg },
            { id: 107, nombre: "Pañitos biodegradables", precio: 43000, imagen: pañitosImg },
            { id: 108, nombre: "Serúms hidratantes para la piel", precio: 45000, imagen: serumsImg },
            { id: 109, nombre: "Mascarilla de arcilla", precio: 28000, imagen: mascarillaImg },
            { id: 110, nombre: "Esponja de baño natural", precio: 98000, imagen: esponjaImg },
            { id: 111, nombre: "Desodorante libre de  aluminio", precio: 97000, imagen: desodoranteImg },
            { id: 21, nombre: "Cesto de fibra natural", precio: 34000, imagen: cestoImg },
            { id: 22, nombre: "Cortinas de algodón", precio: 60000, imagen: cortinasImg },
            { id: 23, nombre: "Sábanas de algodón", precio: 50000, imagen: sabanasImg },
            { id: 24, nombre: "Suavizante natural", precio: 45000, imagen: suavizanteImg },
            { id: 25, nombre: "Vajilla de porcelana", precio: 21000, imagen: vajillaImg },
            { id: 26, nombre: "Bolsa de basura compostable", precio: 22000, imagen: basuraImg },
            { id: 27, nombre: "Detergente en polvo", precio: 41000, imagen: detergenteImg },
            { id: 31, nombre: "Toallas de mircro fibra", precio: 43000, imagen: toallaImg },
            { id: 32, nombre: "Esmalte a base de ingredientes naturales", precio: 56000, imagen: esmalteImg },
            { id: 33, nombre: "Base de maquillaje natural", precio: 53000, imagen: baseImg },
            { id: 41, nombre: "Arena para gatos de bambú", precio: 4000, imagen: arenaImg },
            { id: 42, nombre: "Shampoo para mascotas", precio: 32000, imagen: shampooImg },
            { id: 43, nombre: "Cuerda natural para mascotas", precio: 21000, imagen: cuerdaImg },
            { id: 44, nombre: "Collar de algodon para mascotas", precio: 3200, imagen: collarImg },
            { id: 51, nombre: "Snacks con ingredientes naturales", precio: 12000, imagen: snacksImg },
            { id: 52, nombre: "Capsulas de algorroba", precio: 78000, imagen: capsulasImg },

        ];

        const filtered = allProducts.filter(product =>
            product.nombre.toLowerCase().includes(query.toLowerCase())
        );

        setFilteredProducts(filtered);
    }, [query]);

    return (
        <div>
            <Encabezado />
            <div className="productos_generales">
                {/* <h2>Resultados de búsqueda para: {query}</h2> */}
                {filteredProducts.length === 0 ? (
                    <p className="texto_img_intermedio">No se encontraron productos</p>
                ) : (
                    filteredProducts.map(producto => (
                        <div key={producto.id}>
                            <img
                                className="img_producto_intermedio"
                                src={producto.imagen}
                                alt={producto.nombre}
                            />
                            <div className="texto_img_intermedio">{producto.nombre}</div>
                            <div className="texto_img_intermedio">${producto.precio}</div>
                            <button
                                className="btn-add-cart"
                                onClick={() => addToCart(producto)}
                            >
                                Agregar al carrito
                            </button>
                        </div>
                    ))
                )}
            </div>
            <Pie />
        </div>
    );
}

export default Search;