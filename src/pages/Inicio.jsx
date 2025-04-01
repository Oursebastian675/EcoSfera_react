import Encabezado from "../components/Encabezado.jsx"
import Carrusel from "../components/Carrusel.jsx"
import Intermedio from "../components/Intermedio.jsx";
import Pie from "../components/Pie.jsx";

function Inicio() {
    return (
        <section className="inicio">
            <Encabezado />
            <Carrusel />
            <Intermedio />
            <Pie />
        </section>
    )
}

export default Inicio; 