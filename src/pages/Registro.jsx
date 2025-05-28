import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css"; // Assuming you want to use the same styles

function Registro() {
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [correo, setCorreo] = useState("");
    const [telefono, setTelefono] = useState("");
    const [edad, setEdad] = useState("");
    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate(-1);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can add the logic to save the registration data
        console.log({ nombre, apellido, correo, telefono, edad });
        navigate("/"); // Redirect after registration
    };

    return (
        <div>
        <button onClick={handleGoBack} className="back-regis">←</button>
        <form className="form" onSubmit={handleSubmit}>
            <div className="title">Registro de Usuario</div>
            <input
                type="text"
                placeholder="Nombre"
                className="input"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
            />
            <input
                type="text"
                placeholder="Apellido"
                className="input"
                value={apellido}
                onChange={(e) => setApellido(e.target.value)}
            />
            <input
                type="email"
                placeholder="Correo"
                className="input"
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
            />
            <input
                type="tel"
                placeholder="Teléfono"
                className="input"
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
            />
            <input
                type="number"
                placeholder="Edad"
                className="input"
                value={edad}
                onChange={(e) => setEdad(e.target.value)}
            />
            <button type="submit" className="button">Registrar</button>
        </form>
        </div>
    );
}

export default Registro;