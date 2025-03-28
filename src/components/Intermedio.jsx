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


function Intermedio() {
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
                <div >
                    <img className="img_producto_intermedio" src={Esmalte} alt="Esmalte ecologico" />
                    <div>ajaj</div>
                </div>
                <div >
                    <img className="img_producto_intermedio" src={Bloqueador} alt="Bloqueador solar" />
                    <div>lalala</div>
                </div>
                <div >
                    <img className="img_producto_intermedio" src={Cesto} alt="Cesto de fibras naturales" />
                    <div>lalala</div>
                </div>
                <div >
                    <img className="img_producto_intermedio" src={Cortinas} alt="Cortinas de algodon" />
                    <div>lalala</div>
                </div>
                <div >
                    <img className="img_producto_intermedio" src={Hilo} alt="Hilo dental" />
                    <div>lalala</div>
                </div>
                <div >
                    <img className="img_producto_intermedio" src={ShampooCafe} alt="Shampoo de café" />
                    <div>lalala</div>
                </div>
                <div >
                    <img className="img_producto_intermedio" src={Shampoo} alt="Shampoo" />
                    <div>lalala</div>
                </div>
                <div >
                    <img className="img_producto_intermedio" src={Snacks} alt="Snacks organicos" />
                    <div>lalala</div>
                </div>


            </div>

        </section>

    );
}

export default Intermedio;