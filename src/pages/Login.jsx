import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { usuarios } from "../services/database";
import { alertaConfirmacion, alertaError, alertaRedireccion } from "../helpers/funciones";
import "./Login.css"; // Importando el archivo CSS para estilos

function Login() {
    const [usuario, setUsuario] = useState(""); // Estado para el usuario
    const [password, setPassword] = useState(""); // Estado para la contraseña
    const navigate = useNavigate(); // Hook para redirección

    const handleGoBack = () => {
        navigate(-1);
    };


    
    // Función para verificar las credenciales del usuario
    const handleSubmit = (e) => {
        e.preventDefault(); // Evitar que se recargue la página al enviar el formulario

        // Verificar si el usuario existe en la base de datos y si la contraseña es correcta
        const user = usuarios.find(user => user.usuario === usuario && user.password === password);

        if (user) {
            // Si el usuario y la contraseña coinciden, mostrar la alerta de confirmación
            alertaConfirmacion();

            // Llamar a la alerta de redirección y redirigir después de 2 segundos
            alertaRedireccion(navigate, "/", "¡Bienvenido!" +  user.nombre);

            // Redirigir al usuario a la página "inicio" después de 2 segundos
            setTimeout(() => {
                navigate("/"); // Redirigir a la página de inicio
            }, 2000); // Esperar 2 segundos antes de redirigir
        } else {
            // Si las credenciales son incorrectas, mostrar la alerta de error
            alertaError("Usuario o contraseña incorrectos");
        }
    };

            
    return (
        <div>
             
        
             <button onClick={handleGoBack} className="back">←</button>
        <form className="form" onSubmit={handleSubmit}>
            
           
           
            <div className="title">Bienvenido,<br /><span>Ingresa tus datos</span></div>

            <input
                type="text"
                placeholder="Usuario"
                className="input"
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)} // Actualiza el estado del usuario
                autoFocus
            />
            <input
                type="password"
                placeholder="Contraseña"
                className="input"
                value={password}
                onChange={(e) => setPassword(e.target.value)} // Actualiza el estado de la contraseña
            />

            <button type="submit" className="button-confirm">Ingresar →</button>

            <p className="register-option">
                ¿No tienes una cuenta? <a className="button-register" href="/registro">Regístrate</a>
            </p>

            </form>
            </div>
        );
        

    }

        export default Login;
