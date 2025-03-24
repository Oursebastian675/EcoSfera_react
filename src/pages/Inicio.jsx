import Encabezado from "../components/Encabezado.jsx"
import Carrusel from "../components/Carrusel.jsx"
import Intermedio from "../components/Intermedio.jsx";

function Inicio() {
    return (
        <section className="inicio">
            <Encabezado />
            <Carrusel />
            <Intermedio />
        </section>
    )
}

export default Inicio; 