import Encabezado from "../components/Encabezado";
import Pie from "../components/Pie";
import { useCarShop } from '../components/CarShop';


import toallaImg from '../assets/toalla.jpg';
import esmalteImg from '../assets/esmalte.jpg';
import baseImg from '../assets/base.png';

function BienestarYBelleza() {
    const { addToCart } = useCarShop();
    
   const productos = [
    { id: 31, nombre: "Toallas de mircro fibra", precio: 43000, imagen: toallaImg },
    { id: 32, nombre: "Esmalte a base de ingredientes naturales", precio: 56000, imagen: esmalteImg },
    { id: 33, nombre: "Base de maquillaje natural", precio: 53000, imagen: baseImg },
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

export default BienestarYBelleza;