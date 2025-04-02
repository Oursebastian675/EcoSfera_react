import aseo from "../assets/carrucel.aseo.personal.jpeg"
import belleza from "../assets/carrucel.belleza.jpeg"
import hogar from "../assets/carrucel.hogar.jpeg"
import mascotas from "../assets/carrucel.mascotas.jpeg"

function Carrusel() {
    return (
        <div class="carousel-padre">
            <div className="carousel">
                <div className="carousel-hijo  ">
                    <div className="carousel-item"><img src={aseo} alt="Imagen 1" /></div>
                    <div className="carousel-item"><img src={belleza} alt="Imagen 2" /></div>
                    <div className="carousel-item"><img src={hogar} alt="Imagen 3" /></div>
                    <div className="carousel-item"><img src={mascotas} alt="Imagen 4" /></div>
                </div>
            </div>
        </div>
    )
}

export default Carrusel;