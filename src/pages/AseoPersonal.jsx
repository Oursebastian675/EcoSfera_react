import Encabezado from "../components/Encabezado";
import Pie from "../components/Pie";
import "./Productos.css";
import { useCarShop } from '../components/CarShop';

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

function AseoPersonal() {
    const { addToCart } = useCarShop();
    
const productos = [
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
    { id: 111, nombre: "Desodorante libre de  aluminio", precio: 97000, imagen: desodoranteImg }
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
    );
}

export default AseoPersonal; 