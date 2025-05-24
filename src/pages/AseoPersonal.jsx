import Encabezado from "../components/Encabezado";
import Pie from "../components/Pie";
import "./Productos.css";
import { useCarShop } from '../components/CarShop';

function AseoPersonal() {
    const { addToCart } = useCarShop();
    const productos = [
        { id: 101, nombre: "Producto 1", precio: 10000, imagen: "" },
        { id: 102, nombre: "Producto 2", precio: 20000, imagen: "" },
        { id: 103, nombre: "Producto 3", precio: 30000, imagen: "" },
        { id: 104, nombre: "Producto 4", precio: 40000, imagen: "" }
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