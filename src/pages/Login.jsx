import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { usuarios } from "../services/database";  
import "./Login.css";  

function Login() {
    const [usuario, setUsuario] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate(); // Hook para redirigir

    const handleSubmit = (e) => {
        e.preventDefault(); 

        const user = usuarios.find(user => user.usuario === usuario && user.password === password);

        if (user) {
            alert(`Bienvenido ${user.nombre}`);
            navigate("/inicio"); // Redirige al usuario al inicio
        } else {
            setError("Usuario o contraseña incorrectos");
        }
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            <div className="title">Bienvenido,<br /><span>Ingresa tus datos</span></div>
            
            <input 
                type="text" 
                placeholder="Usuario" 
                className="input" 
                value={usuario} 
                onChange={(e) => setUsuario(e.target.value)}
                autoFocus 
            />
            <input 
                type="password" 
                placeholder="Contraseña" 
                className="input" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)}
            />
            {error && <p className="error-message">{error}</p>}

            <button type="submit" className="button-confirm">Ingresar →</button>
        </form>
    );
}

export default Login;
