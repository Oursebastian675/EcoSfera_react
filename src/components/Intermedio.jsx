import Biodegradable from "../assets/funcion_biodegradable.jpeg";
import Amano from "../assets/funcion_hecho_a_manos.jpeg";
import Ingredientes from "../assets/funcion_ingredientes_naturales.jpeg";
import Animal from "../assets/funcion_libre_de_crueldad_animal.jpeg";
import Sulfato from "../assets/funcion_libre_de_sulfato.jpeg";

function Intermedio() {
  return (
    <section>
    <div className="intermedio_basico">
    <div  className="informacion_basica">
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
        <div>djdjdj</div></div>
    <div className="info_basica_inferior">
        <img className="img_info" src={Amano} alt="Hecho a mano" />
        kakaka</div>
    <div className="info_basica_inferior">
        <img className="img_info" src={Ingredientes} alt="Ingredientes naturales" />
        kakaka</div>
    <div className="info_basica_inferior">
        <img className="img_info" src={Animal} alt="Libre de crueldad animal" />
        kakaka</div>
    <div className="info_basica_inferior">
        <img className="img_info" src={Sulfato} alt="" />
        kakaka</div>

</div>

</section>

  );
}
 
export default Intermedio;