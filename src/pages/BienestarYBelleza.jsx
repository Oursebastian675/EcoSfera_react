import Encabezado from "../components/Encabezado";
import Pie from "../components/Pie";
import { useCarShop } from '../components/CarShop';

function BienestarYBelleza() {
    const { addToCart } = useCarShop();
    const productos = [
        { id: 201, nombre: "Producto 1", precio: 15000, imagen: "" },
        { id: 202, nombre: "Producto 2", precio: 25000, imagen: "" },
        { id: 203, nombre: "Producto 3", precio: 35000, imagen: "" },
        { id: 204, nombre: "Producto 4", precio: 45000, imagen: "" }
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