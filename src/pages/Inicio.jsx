import Encabezado from "../components/Encabezado.jsx"
import Carrusel from "../components/Carrusel.jsx"
import Inferior from "../components/Inferior.jsx";

function Inicio() {
    return (
        <section className="inicio">
            <Encabezado />
            <Carrusel />
            <Inferior />
        </section>
    )
}

export default Inicio; 