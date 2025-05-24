import Encabezado from "../components/Encabezado";
import Pie from "../components/Pie";
import { useCarShop } from '../components/CarShop';

function Mascotas() {
    const { addToCart } = useCarShop();
    const productos = [
        { id: 401, nombre: "Producto 1", precio: 90000, imagen: "" },
        { id: 402, nombre: "Producto 2", precio: 100000, imagen: "" },
        { id: 403, nombre: "Producto 3", precio: 110000, imagen: "" },
        { id: 404, nombre: "Producto 4", precio: 120000, imagen: "" }
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
