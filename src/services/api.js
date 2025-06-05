// En tu archivo de servicio de React (ej: src/services/authService.js)

const API_BASE_URL = 'http://localhost:8080/api/usuarios'; // Asegúrate que el puerto sea el de tu Spring Boot

export const registerUser = async (datosParaBackend) => {
    try {
        const response = await fetch(`${API_BASE_URL}`, { // Endpoint: /api/usuarios
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', // Correcto
            },
            body: JSON.stringify(datosParaBackend), // Serializa el objeto a JSON
        });

        const responseData = await response.json();

        if (!response.ok) {
            // El backend debería devolver un mensaje de error en responseData
            // si el email ya existe, o por otros errores de validación.
            const errorMessage = responseData.message || (typeof responseData === 'string' ? responseData : `Error ${response.status}`);
            throw new Error(errorMessage);
        }
        return responseData; // Devuelve el usuario creado
    } catch (error) {
        console.error("Error en registerUser (servicio React):", error);
        throw error; // Propaga el error para que el componente lo maneje
    }
};


/**
 * Inicia sesión de un usuario.
 * @param {string} credencial - El email o nombre de usuario.
 * @param {string} contrasena - La contraseña del usuario.
 */
export const loginUser = async (credencial, contrasena) => {
    try {
        const response = await fetch(`${API_BASE_URL}/login`, { // Endpoint: /api/usuarios/login
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            // El backend espera un objeto con "credencial" y "contrasena"
            body: JSON.stringify({ credencial: credencial, contrasena: contrasena }),
        });

        const responseData = await response.json(); // Intenta parsear JSON siempre

        if (!response.ok) {
            // El backend devuelve "Credenciales inválidas" o similar en el cuerpo para 401
            const errorMessage = responseData.message || (typeof responseData === 'string' ? responseData : `Error ${response.status}`);
            throw new Error(errorMessage);
        }
        return responseData; // Devuelve el objeto usuario (sin contraseña)
    } catch (error) {
        console.error("Error en el servicio de login:", error);
        throw error; // Re-lanza el error para que el componente lo maneje
    }
};