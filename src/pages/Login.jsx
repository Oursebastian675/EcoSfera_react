import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "./Login.css";
import { Link } from "react-router-dom";
import axios from 'axios';

function Login() {
    const [credencial, setCredencial] = useState("");
    const [contrasena, setContrasena] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate("/");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        if (!credencial || !contrasena) {
            Swal.fire({
                title: "Error",
                text: "Por favor ingrese usuario y contraseña",
                icon: "error"
            });
            setIsLoading(false);
            return;
        }

        try {
            const response = await axios.post('http://localhost:8080/api/usuarios/login', {
                credencial: credencial,
                contrasena: contrasena
            });

            const { token, userId, email, nombre, apellido } = response.data;

            // Guardar el token y datos del usuario
            localStorage.setItem('jwtToken', token);
            
            const usuarioParaGuardar = {
                id: userId,
                usuario: email,
                nombreCompleto: `${nombre} ${apellido}`, // Combinamos nombre y apellido
                email: email
            };
            
            sessionStorage.setItem('usuario', JSON.stringify(usuarioParaGuardar));
            sessionStorage.setItem('token', token);

            Swal.fire({
                title: "¡Bienvenido!",
                text: nombre,
                icon: "success",
                timer: 2000,
                showConfirmButton: false
            }).then(() => {
                navigate("/");
            });

        } catch (error) {
            console.error('Error en el login:', error.response ? error.response.data : error.message);
            Swal.fire({
                title: "Error",
                text: error.response?.data?.message || "Error al intentar iniciar sesión. Por favor, inténtalo de nuevo.",
                icon: "error"
            });
        } finally {
            setIsLoading(false);
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
                        value={credencial}
                        onChange={(e) => setCredencial(e.target.value)}
                        autoFocus
                        name="credencial"
                    />
                </div>

                <div className="input-group">
                    <input
                        type="password"
                        placeholder="Contraseña"
                        className="input"
                        value={contrasena}
                        onChange={(e) => setContrasena(e.target.value)}
                        name="contrasena"
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