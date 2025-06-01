import Encabezado from "../components/Encabezado";
import Pie from "../components/Pie";
import "./Productos.css";
import { useCarShop } from '../components/CarShop';

import snacksImg from '../assets/snacks.jpg';
import capsulasImg from '../assets/capsulas.jpg';

function Alimentos() {

    const { addToCart } = useCarShop();
    
const productos = [
    { id: 501, nombre: "Snacks con ingredientes naturales", precio: 12000, imagen: snacksImg },
    { id: 502, nombre: "Capsulas de algorroba", precio: 78000, imagen: capsulasImg }
    
];

    return (
        <div>
        <Encabezado />
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
        <Pie />
    </div>
                   
            
    )


}

export default Alimentos;