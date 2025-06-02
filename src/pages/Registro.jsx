import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { usuarios, actualizarUsuarios } from "../services/database";
import Swal from "sweetalert2";

function Registro() {
    const [formData, setFormData] = useState({
        nombre: "",
        apellido: "",
        correo: "",
        telefono: "",
        edad: "",
        usuario: "",
        password: "",
        confirmPassword: ""
    });

    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const validarFormulario = () => {
        if (!formData.nombre || !formData.apellido || !formData.correo || 
            !formData.telefono || !formData.edad || !formData.usuario || 
            !formData.password || !formData.confirmPassword) {
            Swal.fire({
                title: "Error",
                text: "Todos los campos son obligatorios",
                icon: "error"
            });
            return false;
        }

        if (formData.password !== formData.confirmPassword) {
            Swal.fire({
                title: "Error",
                text: "Las contraseñas no coinciden",
                icon: "error"
            });
            return false;
        }

        if (usuarios.some(u => u.usuario === formData.usuario)) {
            Swal.fire({
                title: "Error",
                text: "El nombre de usuario ya existe",
                icon: "error"
            });
            return false;
        }

        return true;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (validarFormulario()) {
            const nuevoUsuario = {
                usuario: formData.usuario,
                password: formData.password,
                nombre: `${formData.nombre} ${formData.apellido}`,
                correo: formData.correo,
                telefono: formData.telefono,
                edad: formData.edad
            };

            const nuevosUsuarios = [...usuarios, nuevoUsuario];
            actualizarUsuarios(nuevosUsuarios);

            Swal.fire({
                title: "¡Éxito!",
                text: "Usuario registrado correctamente",
                icon: "success"
            }).then(() => {
                navigate("/login");
            });
        }
    };

    return (
        <div>
            <button onClick={handleGoBack} className="back-regis">←</button>
            <form className="form" onSubmit={handleSubmit}>
                <div className="title">Registro de Usuario</div>
                <input
                    type="text"
                    name="nombre"
                    placeholder="Nombre"
                    className="input"
                    value={formData.nombre}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="apellido"
                    placeholder="Apellido"
                    className="input"
                    value={formData.apellido}
                    onChange={handleChange}
                />
                <input
                    type="email"
                    name="correo"
                    placeholder="Correo"
                    className="input"
                    value={formData.correo}
                    onChange={handleChange}
                />
                <input
                    type="tel"
                    name="telefono"
                    placeholder="Teléfono"
                    className="input"
                    value={formData.telefono}
                    onChange={handleChange}
                />
                <input
                    type="number"
                    name="edad"
                    placeholder="Edad"
                    className="input"
                    value={formData.edad}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="usuario"
                    placeholder="Nombre de usuario"
                    className="input"
                    value={formData.usuario}
                    onChange={handleChange}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Contraseña"
                    className="input"
                    value={formData.password}
                    onChange={handleChange}
                />
                <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirmar contraseña"
                    className="input"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                />
                <button type="submit" className="button-reg">Registrar</button>
            </form>
        </div>
    );
}

export default Registro;