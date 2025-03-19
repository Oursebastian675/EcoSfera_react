function Carrusel() {
    return (
        <div class="carousel-padre">

            <div className="carousel">
                <div className="carousel-hijo  ">
                    <div className="carousel-item"><img src="src/assets/carrucel.aseo.personal.jpeg" alt="Imagen 1" /></div>

                    <div className="carousel-item"><img src="src/assets/carrucel.mascotas.jpeg" alt="Imagen 2" /></div>
                    <div className="carousel-item"><img src="src/assets/carrucel.belleza.jpeg" alt="Imagen 3" /></div>
                    <div className="carousel-item"><img src="src/assets/carrucel.hogar.jpeg" alt="Imagen 4" /></div>
                </div>
            </div>
        </div>
    )
}

export default Carrusel;