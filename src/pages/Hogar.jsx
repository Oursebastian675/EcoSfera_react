import Encabezado from "../components/Encabezado";
import Pie from "../components/Pie";
import { useCarShop } from '../components/CarShop';

import jabonNaturalImg from '../assets/jabon_natural.webp';
import bolsaAlgodonImg from '../assets/bolsa-algodon-organico.jpg';
import velasSoyaImg from '../assets/velas.webp';
import cepillosReutilizablesImg from '../assets/cepillos.jpg';


function Hogar() {
    const { addToCart } = useCarShop();
    
   const productos = [
    { id: 301, nombre: "Jabón Natural", precio: 50000, imagen: jabonNaturalImg },
    { id: 302, nombre: "Bolsa Reutilizable", precio: 60000, imagen: bolsaAlgodonImg },
    { id: 303, nombre: "Velas de cera de soya con aceites esenciales", precio: 70000, imagen: velasSoyaImg },
    { id: 304, nombre: "Cepillos Reutilizables", precio: 80000, imagen: cepillosReutilizablesImg }
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