import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "./Login.css";
import { Link } from "react-router-dom";
import { loginUser } from "../services/api.js"; // O la ruta y nombre correctos

function Login() {
    const [usuario, setUsuario] = useState(""); // Este estado 'usuario' se usará como 'credencial'
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false); // Para feedback visual
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate("/"); // O a la ruta que consideres "anterior"
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true); // Inicia la carga

        if (!usuario || !password) {
            Swal.fire({
                title: "Error",
                text: "Por favor ingrese usuario y contraseña",
                icon: "error"
            });
            setIsLoading(false); // Detiene la carga
            return;
        }

        try {
            // Llama a la función del servicio, pasando el estado 'usuario' como 'credencial'
            const userData = await loginUser(usuario, password);

            // Guardar información del usuario en sessionStorage
            // El backend devuelve el objeto Usuario completo (sin contraseña)
            // Asegúrate que userData.usuario y userData.nombre existan en la respuesta
            if (userData && userData.usuario && userData.nombre) {
                sessionStorage.setItem('usuarioLogueado', userData.usuario); // Nombre de usuario
                sessionStorage.setItem('nombreCompletoUsuario', userData.nombre + (userData.apellido ? ` ${userData.apellido}` : '')); // Nombre completo
                sessionStorage.setItem('idUsuario', userData.id); // También podrías guardar el ID si es útil
                // Si necesitas el objeto completo (excepto contraseña), puedes guardarlo como string JSON
                // const userToStore = { ...userData };
                // delete userToStore.contrasena; // Aunque ya debería venir null desde el backend
                // sessionStorage.setItem('userData', JSON.stringify(userToStore));

                Swal.fire({
                    title: "¡Bienvenido!",
                    text: userData.nombre, // Muestra el nombre del usuario
                    icon: "success",
                    timer: 2000,
                    showConfirmButton: false
                }).then(() => {
                    navigate("/"); // Redirige a la página principal o dashboard
                });
            } else {
                // Esto no debería ocurrir si el login es exitoso y el backend devuelve el usuario
                console.error("Respuesta inesperada del servidor:", userData);
                Swal.fire({
                    title: "Error",
                    text: "Respuesta inesperada del servidor tras el login.",
                    icon: "error"
                });
            }

        } catch (error) {
            // El servicio loginUser ya debería lanzar un error con un mensaje útil
            Swal.fire({
                title: "Error",
                text: error.message || "Usuario o contraseña incorrectos",
                icon: "error"
            });
        } finally {
            setIsLoading(false); // Detiene la carga, ya sea éxito o error
        }
    };
    
    return (
        <div>
            <button onClick={handleGoBack} className="back">←</button>
            <form className="form" onSubmit={handleSubmit}>
                <div className="title">Bienvenido,<br /><span>Ingresa tus datos</span></div>

                <input
                    type="text"
                    placeholder="Email o Nombre de Usuario" // Placeholder más descriptivo
                    className="input"
                    value={usuario}
                    onChange={(e) => setUsuario(e.target.value)}
                    autoFocus
                    name="credencial" // Coincide con el DTO, aunque el estado se llama 'usuario'
                />
                <input
                    type="password"
                    placeholder="Contraseña"
                    className="input"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    name="contrasena" // Coincide con el DTO
                />

                <button type="submit" className="button-confirm" disabled={isLoading}>
                    {isLoading ? 'Ingresando...' : 'Ingresar →'}
                </button>

                <p className="register-option">
                    ¿No tienes una cuenta?<Link className="button-register" to="/registro">Registrarse</Link>
                </p>
            </form>
        </div>
    );
}

export default Login;