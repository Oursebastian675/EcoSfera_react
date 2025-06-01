import Encabezado from "../components/Encabezado";
import Pie from "../components/Pie";
import { useCarShop } from '../components/CarShop';

import arenaImg from '../assets/arena_bambu.jpg';
import shampooImg from '../assets/shampoo.jpg';
import cuerdaImg from '../assets/cuerda.jpg';
import collarImg from '../assets/collar_algodon.jpeg';


function Mascotas() {
    const { addToCart } = useCarShop();
  const productos = [
      { id: 41, nombre: "Arena para gatos de bambú", precio: 4000, imagen: arenaImg },
      { id: 42, nombre: "Shampoo para mascotas", precio: 32000, imagen: shampooImg },
      { id: 43, nombre: "Cuerda natural para mascotas", precio: 21000, imagen: cuerdaImg },
      { id: 44, nombre: "Collar de algodon para mascotas", precio: 3200, imagen: collarImg }
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

export default Mascotas;
