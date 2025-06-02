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
        e.preventDefault();

        const user = usuarios.find(user => user.usuario === usuario && user.password === password);

        if (user) {
            // Guardar información del usuario en sessionStorage
            sessionStorage.setItem('usuario', user.usuario);
            sessionStorage.setItem('nombreCompleto', user.nombre);

            alertaConfirmacion();
            alertaRedireccion(navigate, "/", "¡Bienvenido! " + user.nombre);

            setTimeout(() => {
                navigate("/");
            }, 2000);
        } else {
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
