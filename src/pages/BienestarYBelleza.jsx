import Encabezado from "../components/Encabezado";
import Pie from "../components/Pie";
import { productos } from "../data/productos";

function BienestarYBelleza() {
    return (
        <div>
            <Encabezado/>
            <div className="productos_generales">
                {productos.Belleza.map(producto => (
                    <div key={producto.id}>
                        <img 
                            className="img_producto_intermedio" 
                            src={producto.imagen} 
                            alt={producto.nombre} 
                        />
                        <div className="texto_img_intermedio">{producto.nombre}</div>
                        <div className="texto_img_intermedio">${producto.precio}</div>
                        <button className="btn-add-cart">Añadir al carrito</button>
                    </div>
                ))}
            </div>
            <Pie/>
        </div>
    );
}

export default BienestarYBelleza;