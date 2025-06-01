import Encabezado from "../components/Encabezado";
import Pie from "../components/Pie";
import { useCarShop } from '../components/CarShop';

import sabanasImg from '../assets/sabanas.jpg';
import cestoImg from '../assets/cesto.jpg';
import cortinasImg from '../assets/cortinas.jpg';
import suavizanteImg from '../assets/suavizante.jpg';
import vajillaImg from '../assets/vajilla.jpeg';
import basuraImg from '../assets/bolsa.jpg';
import detergenteImg from '../assets/detergente.jpg';

function Hogar() {
    const { addToCart } = useCarShop();
    
   const productos = [
    { id: 21, nombre: "Cesto de fibra natural", precio: 34000, imagen: cestoImg },
    { id: 22, nombre: "Cortinas de algodón", precio: 60000, imagen: cortinasImg },
    { id: 23, nombre: "Sábanas de algodón", precio: 50000, imagen: sabanasImg },
    { id: 24, nombre: "Suavizante natural", precio: 45000, imagen: suavizanteImg },
    { id: 25, nombre: "Vajilla de porcelana", precio: 21000, imagen: vajillaImg },
    { id: 26, nombre: "Bolsa de basura compostable", precio: 22000, imagen: basuraImg },
    { id: 27, nombre: "Detergente en polvo", precio: 41000, imagen: detergenteImg },
];


    return (
        <div>
            <Encabezado/>
            <div className="productos_generales">
                {productos.map(producto => (
                    <div key={producto.id}>
                        <img 
                            className="img_producto_intermedio" 
                            src={producto.imagen || "/placeholder.jpg"} 
                            alt={producto.nombre} 
                        />
                        <div className="texto_img_intermedio">{producto.nombre}</div>
                        <div className="texto_img_intermedio">${producto.precio}</div>
                        <button 
                            className="btn-add-cart"
                            onClick={() => addToCart(producto)}
                        >
                            Añadir al carrito
                        </button>
                    </div>
                ))}
            </div>
            <Pie/>
        </div>
    );
}

export default Hogar;