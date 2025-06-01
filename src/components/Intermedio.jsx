import Biodegradable from "../assets/funcion_biodegradable.jpeg";
import Amano from "../assets/funcion_hecho_a_manos.jpeg";
import Ingredientes from "../assets/funcion_ingredientes_naturales.jpeg";
import Animal from "../assets/funcion_libre_de_crueldad_animal.jpeg";
import Sulfato from "../assets/funcion_libre_de_sulfato.jpeg";
import Banner from "../assets/banerVerticalProductos.jpg";
import React from 'react';
import "../pages/Productos.css";
import { useCarShop } from './CarShop';

import collarImg from '../assets/collar_algodon.jpeg';
import aceiteImg from '../assets/aceite.jpg';
import detergenteImg from '../assets/detergente.jpg';
import bloqueadorImg from '../assets/bloqueador.jpg';
import cortinasImg from '../assets/cortinas.jpg';
import capsulasImg from '../assets/capsulas.jpg';

function Intermedio() {
    const { addToCart } = useCarShop();

    const productos = [
        { id: 101, nombre: "Aceite natural con coco", precio: 75000, imagen: aceiteImg },
        { id: 27, nombre: "Detergente en polvo", precio: 41000, imagen: detergenteImg },
        { id: 44, nombre: "Collar de algodon para mascotas", precio: 3200, imagen: collarImg },
        { id: 22, nombre: "Cortinas de algodón", precio: 60000, imagen: cortinasImg },
        { id: 105, nombre: "Bloqueador natural", precio: 7600, imagen: bloqueadorImg }, 
        { id: 502, nombre: "Capsulas de algorroba", precio: 78000, imagen: capsulasImg }
    ];


    return (
        <section>
            <div className="intermedio_basico">
                <div className="informacion_basica">
                    <b>Productos 100% confiables.</b>
                </div>
                <div className="informacion_basica">
                    <b>Envíos a todo el país.</b>
                </div>
                <div className="informacion_basica">
                    <b>Medios de pago.</b>
                </div>
                <div className="informacion_basica">
                    <b>Garantia total.</b>
                </div>
            </div>



            <div className="intermedio_info">
                <div className="info_basica_inferior">
                    <img className="img_info" src={Biodegradable} alt="Biodegradable" />
                    <div className="texto_imagenes_arriba">Biodegradable</div></div>
                <div className="info_basica_inferior">
                    <img className="img_info" src={Amano} alt="Hecho a mano" />
                    <div className="texto_imagenes_arriba">Hecho a mano</div></div>
                <div className="info_basica_inferior">
                    <img className="img_info" src={Ingredientes} alt="Ingredientes naturales" />
                    <div className="texto_imagenes_arriba">Ingredientes naturales</div></div>
                <div className="info_basica_inferior">
                    <img className="img_info" src={Animal} alt="Libre de crueldad animal" />
                    <div className="texto_imagenes_arriba"> Libre de crueldad animal</div></div>
                <div className="info_basica_inferior">
                    <img className="img_info" src={Sulfato} alt="" />
                    <div className="texto_imagenes_arriba">Libre de sulfato</div></div>
            </div>


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

            <div className="banner">
                <img className="img_banner" src={Banner} alt="Banner" />
                <p> <strong>Productos completamente naturales.</strong>

                    En EcoSfera, creemos en el poder de la naturaleza para cuidar tu bienestar y resaltar tu belleza de manera saludable y sostenible. Nuestros productos están elaborados con ingredientes 100% naturales, orgámicos y de origen ético, sin aditivos ni productos químicos. Cada fórmula está pensada para brindarte la mejor experiencia sin comprometer la salud de tu piel ni el medio ambiente.

                    <div>En EcoSfera, cada uno de nuestros productos es una apuesta por un estilo de vida más natural, consciente y saludable. Disfruta de lo mejor que la naturaleza tiene para ofrecer y transforma tu rutina de cuidado personal con nuestra línea de productos naturales.</div></p>
            </div>

        </section>

    );
}

export default Intermedio;