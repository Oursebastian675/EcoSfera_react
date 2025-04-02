import Encabezado from "../components/Encabezado.jsx"
import { Link } from "react-router-dom";
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

            <div>
                <h1>Bienvenido a la Página Principal</h1>
                <Link to="/login">Ir a Login</Link> {/* Enlace que lleva a la página de Login */}
            </div>
        </section>
    )
}

export default Inicio; 