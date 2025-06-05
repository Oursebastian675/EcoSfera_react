import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css"; // Asegúrate que la ruta a tu CSS sea correcta
// Asumo que tienes un servicio api.js que exporta crearUsuario
// import { crearUsuario } from "../services/api";
// Por el contexto anterior, parece que lo llamaste registerUser en authService.js
import { registerUser } from "../services/api.js"; // O como hayas llamado a tu función de servicio
import Swal from "sweetalert2";

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
                    required // Añadido para validación HTML5 básica
                />
                <input
                    type="text"
                    name="apellido"
                    placeholder="Apellido"
                    className="input"
                    value={formData.apellido}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="correo" // Mantenemos 'correo' para el estado del formulario y el input
                    placeholder="Correo"
                    className="input"
                    value={formData.correo}
                    onChange={handleChange}
                    required
                />
                <input
                    type="tel"
                    name="telefono"
                    placeholder="Teléfono"
                    className="input"
                    value={formData.telefono}
                    onChange={handleChange}
                    required
                />
                <input
                    type="number" // Si 'edad' es numérico
                    name="edad"
                    placeholder="Edad"
                    className="input"
                    value={formData.edad}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="usuario"
                    placeholder="Nombre de usuario"
                    className="input"
                    value={formData.usuario}
                    onChange={handleChange}
                    required
                />
                <input
                    type="password"
                    name="password" // Mantenemos 'password' para el estado del formulario y el input
                    placeholder="Contraseña"
                    className="input"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
                <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirmar contraseña"
                    className="input"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                />
                <button type="submit" className="button-reg" disabled={isLoading}>
                    {isLoading ? 'Registrando...' : 'Registrar'}
                </button>
            </form>
        </div>
    );
}

export default Registro;