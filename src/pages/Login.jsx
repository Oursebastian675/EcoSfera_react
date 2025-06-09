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
                // Crear objeto de usuario para sessionStorage
                const usuarioParaGuardar = {
                    usuario: userData.usuario,
                    nombreCompleto: userData.nombre + (userData.apellido ? ` ${userData.apellido}` : ''),
                    id: userData.id
                };
                
                // Guardar el objeto usuario completo
                sessionStorage.setItem('usuario', JSON.stringify(usuarioParaGuardar));
                
                // También guardamos el token si lo necesitas
                sessionStorage.setItem('token', userData.token);

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
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
                <div className="title">
                    Bienvenido,
                    <span>Ingresa tus datos</span>
                </div>

                <div className="input-group">
                    <input
                        type="text"
                        placeholder="Email o Nombre de Usuario"
                        className="input"
                        value={usuario}
                        onChange={(e) => setUsuario(e.target.value)}
                        autoFocus
                        name="credencial"
                    />
                </div>

                <div className="input-group">
                    <input
                        type="password"
                        placeholder="Contraseña"
                        className="input"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        name="password"
                    />
                </div>

                <button 
                    type="submit" 
                    className="button-confirm"
                    disabled={isLoading}
                >
                    {isLoading ? 'Ingresando...' : 'INGRESAR →'}
                </button>

                <div style={{ textAlign: 'center', marginTop: '20px' }}>
                    <span style={{ color: 'var(--text-secondary)' }}>¿No tienes una cuenta? </span>
                    <Link to="/registro">Registrarse</Link>
                </div>
            </form>
        </div>
    );
}

export default Login;