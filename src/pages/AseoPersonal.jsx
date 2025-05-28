import Encabezado from "../components/Encabezado";
import Pie from "../components/Pie";
import "./Productos.css";
import { useCarShop } from '../components/CarShop';

function AseoPersonal() {
    const { addToCart } = useCarShop();
    const productos = [
        { id: 101, nombre: "Cepillo o peine para mascotas", precio: 10000, imagen: "../assets/cepillo.jfif" },
        { id: 102, nombre: "Shampoo para mascotas", precio: 20000, imagen: "../assets/shampoo.jfif" },
        { id: 103, nombre: "Cortaúñas para mascotas", precio: 30000, imagen: "../assets/cortauñas.jpg" },
        { id: 104, nombre: "Toallitas húmedas para mascotas", precio: 40000, imagen: "../assets/toallitas.jfif" }
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