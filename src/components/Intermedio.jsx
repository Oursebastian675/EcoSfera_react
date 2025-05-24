import Biodegradable from "../assets/funcion_biodegradable.jpeg";
import Amano from "../assets/funcion_hecho_a_manos.jpeg";
import Ingredientes from "../assets/funcion_ingredientes_naturales.jpeg";
import Animal from "../assets/funcion_libre_de_crueldad_animal.jpeg";
import Sulfato from "../assets/funcion_libre_de_sulfato.jpeg";
import Esmalte from "../assets/producto_esmalte_ecologico.jpeg";
import Bloqueador from "../assets/producto_bloqueador.jpeg";
import Cesto from "../assets/producto_cesto_fibras_naturales.jpeg";
import Cortinas from "../assets/producto_cortinas_de_algodon.jpeg";
import Hilo from "../assets/producto_hilo_dental_seda.jpeg";
import ShampooCafe from "../assets/producto_shampoo_de_cafe.jpeg";
import Shampoo from "../assets/producto_shampoo.jpeg";
import Snacks from "../assets/producto_snacks_organicos.jpeg";
import Banner from "../assets/banerVerticalProductos.jpg";
import React from 'react';
import { useCarShop } from './CarShop';

function Intermedio() {
    const { addToCart } = useCarShop();

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



            <div className="productos_intermedio">
                <div>
                    <img className="img_producto_intermedio" src="" alt="Producto 501" />
                    <div className="texto_img_intermedio">Producto 501</div>
                    <div className="texto_img_intermedio">$10.000</div>
                    <button 
                        className="btn-add-cart" 
                        onClick={() => addToCart({
                            id: 501,
                            nombre: "Producto 501",
                            precio: 10000,
                            imagen: ""
                        })}
                    >
                        Añadir al carrito
                    </button>
                </div>
                <div>
                    <img className="img_producto_intermedio" src="" alt="Producto 502" />
                    <div className="texto_img_intermedio">Producto 502</div>
                    <div className="texto_img_intermedio">$15.000</div>
                    <button className="btn-add-cart" onClick={() => addToCart({
                        id: 502,
                        nombre: "Producto 502",
                        precio: 15000,
                        imagen: ""
                    })}>Añadir al carrito</button>
                </div>
                <div>
                    <img className="img_producto_intermedio" src="" alt="Producto 503" />
                    <div className="texto_img_intermedio">Producto 503</div>
                    <div className="texto_img_intermedio">$20.000</div>
                    <button className="btn-add-cart" onClick={() => addToCart({
                        id: 503,
                        nombre: "Producto 503",
                        precio: 20000,
                        imagen: ""
                    })}>Añadir al carrito</button>
                </div>
                <div>
                    <img className="img_producto_intermedio" src="" alt="Producto 504" />
                    <div className="texto_img_intermedio">Producto 504</div>
                    <div className="texto_img_intermedio">$25.000</div>
                    <button className="btn-add-cart" onClick={() => addToCart({
                        id: 504,
                        nombre: "Producto 504",
                        precio: 25000,
                        imagen: ""
                    })}>Añadir al carrito</button>
                </div>
                <div>
                    <img className="img_producto_intermedio" src="" alt="Producto 505" />
                    <div className="texto_img_intermedio">Producto 505</div>
                    <div className="texto_img_intermedio">$25.000</div>
                    <button className="btn-add-cart" onClick={() => addToCart({
                        id: 505,
                        nombre: "Producto 505",
                        precio: 25000,
                        imagen: ""
                    })}>Añadir al carrito</button>
                </div>
                <div>
                    <img className="img_producto_intermedio" src="" alt="Producto 506" />
                    <div className="texto_img_intermedio">Producto 506</div>
                    <div className="texto_img_intermedio">$25.000</div>
                    <button className="btn-add-cart" onClick={() => addToCart({
                        id: 506,
                        nombre: "Producto 506",
                        precio: 15000,
                        imagen: ""
                    })}>Añadir al carrito</button>
                </div>
                <div>
                    <img className="img_producto_intermedio" src="" alt="Producto 507" />
                    <div className="texto_img_intermedio">Producto 507</div>
                    <div className="texto_img_intermedio">$25.000</div>
                    <button className="btn-add-cart" onClick={() => addToCart({
                        id: 507,
                        nombre: "Producto 507",
                        precio: 15000,
                        imagen: ""
                    })}>Añadir al carrito</button>
                </div>
                <div>
                    <img className="img_producto_intermedio" src="" alt="Producto 508" />
                    <div className="texto_img_intermedio">Producto 508</div>
                    <div className="texto_img_intermedio">$25.000</div>
                    <button className="btn-add-cart" onClick={() => addToCart({
                        id: 508,
                        nombre: "Producto 508",
                        precio: 15000,
                        imagen: ""
                    })}>Añadir al carrito</button>
                </div>
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