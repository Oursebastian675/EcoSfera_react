import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css"; // Asegúrate que la ruta a tu CSS sea correcta
// Asumo que tienes un servicio api.js que exporta crearUsuario
// import { crearUsuario } from "../services/api";
// Por el contexto anterior, parece que lo llamaste registerUser en authService.js
import { registerUser } from "../services/api.js"; // O como hayas llamado a tu función de servicio
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

function Registro() {
    const [formData, setFormData] = useState({
        nombre: "",
        apellido: "",
        correo: "", // En el backend es 'email'
        telefono: "",
        edad: "",
        usuario: "",
        password: "", // En el backend es 'contrasena'
        confirmPassword: ""
    });
    const [isLoading, setIsLoading] = useState(false); // Añadido para feedback visual

    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate("/login");
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const validarFormulario = () => {
        // Tu validación actual está bien
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
        // Podrías añadir más validaciones aquí (ej. formato de email, longitud de contraseña)
        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (validarFormulario()) {
            setIsLoading(true); // Inicia la carga
            try {
                // Construye el objeto para enviar al backend
                // Asegúrate de que los nombres de las claves coincidan con tu entidad Usuario.java
                const datosParaBackend = {
                    nombre: formData.nombre,
                    apellido: formData.apellido,
                    email: formData.correo, // Cambiado de 'correo' a 'email'
                    telefono: formData.telefono,
                    edad: formData.edad,     // Asegúrate que el tipo de dato sea el esperado (String o Integer)
                    usuario: formData.usuario,
                    contrasena: formData.password // Cambiado de 'password' a 'contrasena'
                };

                // Llama a tu función de servicio que hace el fetch al backend
                // Asumo que 'crearUsuario' es la función correcta de tu servicio api.js
                // o 'registerUser' de authService.js como en el ejemplo anterior.
                // Ajusta el nombre de la función según tu implementación.
                await registerUser(datosParaBackend); // Usando registerUser del ejemplo anterior

                Swal.fire({
                    title: "¡Éxito!",
                    text: "Usuario registrado correctamente",
                    icon: "success",
                    timer: 2000,
                    showConfirmButton: false
                }).then(() => {
                    navigate("/login"); // Redirige al login después del éxito
                });

            } catch (error) {
                // El servicio authService.js ya debería lanzar un error con un mensaje útil
                let errorMessage = error.message || "Error al registrar el usuario. Intente de nuevo.";
                // Puedes personalizar más el mensaje si el backend devuelve códigos específicos
                // if (error.response && error.response.status === 400) {
                //     errorMessage = error.response.data.message || "Datos inválidos.";
                // }

                Swal.fire({
                    title: "Error",
                    text: errorMessage,
                    icon: "error"
                });
            } finally {
                setIsLoading(false); // Finaliza la carga, ya sea éxito o error
            }
        }
    };

    return (
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
                <div className="title">
                    Registro
                    <span>Crea tu cuenta</span>
                </div>

                <div className="input-group">
                    <input
                        type="text"
                        placeholder="Nombre"
                        className="input"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                    />
                </div>

                <div className="input-group">
                    <input
                        type="text"
                        placeholder="Apellido"
                        className="input"
                        name="apellido"
                        value={formData.apellido}
                        onChange={handleChange}
                    />
                </div>

                <div className="input-group">
                    <input
                        type="email"
                        placeholder="Correo electrónico"
                        className="input"
                        name="correo"
                        value={formData.correo}
                        onChange={handleChange}
                    />
                </div>

                <div className="input-group">
                    <input
                        type="tel"
                        placeholder="Teléfono"
                        className="input"
                        name="telefono"
                        value={formData.telefono}
                        onChange={handleChange}
                    />
                </div>

                <div className="input-group">
                    <input
                        type="number"
                        placeholder="Edad"
                        className="input"
                        name="edad"
                        value={formData.edad}
                        onChange={handleChange}
                    />
                </div>

                <div className="input-group">
                    <input
                        type="text"
                        placeholder="Nombre de usuario"
                        className="input"
                        name="usuario"
                        value={formData.usuario}
                        onChange={handleChange}
                    />
                </div>

                <div className="input-group">
                    <input
                        type="password"
                        placeholder="Contraseña"
                        className="input"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                </div>

                <div className="input-group">
                    <input
                        type="password"
                        placeholder="Confirmar contraseña"
                        className="input"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                    />
                </div>

                <button 
                    type="submit" 
                    className="button-confirm"
                    disabled={isLoading}
                >
                    {isLoading ? 'Registrando...' : 'REGISTRARSE'}
                </button>

                <div style={{ textAlign: 'center', marginTop: '20px' }}>
                    <span style={{ color: 'var(--text-secondary)' }}>¿Ya tienes una cuenta? </span>
                    <Link to="/login">Iniciar sesión</Link>
                </div>
            </form>
        </div>
    );
}

export default Registro;