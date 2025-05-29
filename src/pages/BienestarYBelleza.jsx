import Encabezado from "../components/Encabezado";
import Pie from "../components/Pie";
import { useCarShop } from '../components/CarShop';


import shampooMascotasImg from '../assets/shampoo_mascotas.jpg';
import cepilloCerdasImg from '../assets/cepillo_cerdas.jpg';
import hidrataImg from '../assets/hidrata.jpg';
import limaImg from '../assets/lima.jpg';


function BienestarYBelleza() {
    const { addToCart } = useCarShop();
    
   const productos = [
    { id: 201, nombre: "Shampoo hipoalergénico para mascotas", precio: 15000, imagen: shampooMascotasImg },
    { id: 202, nombre: "Cepillo desenredante o de cerdas suaves", precio: 25000, imagen: cepilloCerdasImg },
    { id: 203, nombre: "Aceite o Spray hidratante para el pelaje", precio: 35000, imagen: hidrataImg },
    { id: 204, nombre: "Lima", precio: 45000, imagen: limaImg }
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