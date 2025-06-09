// En tu archivo de servicio de React (ej: src/services/authService.js)

const API_BASE_URL = 'http://localhost:8080/api/usuarios'; // Asegúrate que el puerto sea el de tu Spring Boot
const API_ROOT_URL = 'http://localhost:8080/api'; // Ajusta esta URL base para otras APIs si es necesario

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

// Función para obtener datos del usuario actual
export const getCurrentUser = async (userId) => {
    try {
        const response = await fetch(`${API_BASE_URL}/${userId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });

        if (!response.ok) {
            throw new Error(`Error al obtener datos del usuario: ${response.status}`);
        }

        const userData = await response.json();
        return userData;
    } catch (error) {
        console.error("Error al obtener datos del usuario:", error);
        throw error;
    }
}; // Llave de cierre de getCurrentUser movida aquí

/**
* Envía los datos de una nueva venta al backend.
* @param {object} datosVenta - Objeto con la información de la venta.
* @param {string} token - El token JWT de autenticación del usuario.
*/
export const crearVenta = async (datosVenta, token) => {
    if (!token) {
        console.error("Error en crearVenta: Token de autenticación no proporcionado.");
        // Es mejor lanzar un error para que el componente lo maneje y muestre al usuario
        throw new Error("Usuario no autenticado. Por favor, inicia sesión.");
    }

    try {
        const response = await fetch(`${API_ROOT_URL}/ventas`, { // Endpoint de tu VentaController
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`, // Envía el token para autenticación
            },
            body: JSON.stringify(datosVenta),
        });

        // Intenta parsear como JSON incluso si no es OK, para obtener el mensaje de error del backend
        const responseData = await response.json();

        if (!response.ok) {
            // El backend devuelve un objeto con "message" para errores 400 y 500
            const errorMessage = responseData.message || `Error al procesar la venta: ${response.status}`;
            throw new Error(errorMessage);
        }

        return responseData; // Devuelve la venta creada o la confirmación del backend
    } catch (error) {
        console.error("Error en el servicio de crearVenta:", error.message);
        // Propaga el error para que el componente de React lo maneje
        // Si el error ya es una instancia de Error, simplemente relánzalo.
        // Si es una cadena (por ejemplo, de un throw "mensaje"), envuélvelo en un Error.
        if (error instanceof Error) {
            throw error;
        }
        else {
            throw new Error(String(error));
        }
    }
};

// La función sendPurchaseData que sugerí anteriormente también debería estar aquí, 
// a menos que crearVenta la reemplace.
// Si sendPurchaseData es diferente, asegúrate que también esté en el nivel superior.
export const sendPurchaseData = async (purchaseData) => {
    try {
        // Asumiendo que purchaseData ya incluye el token si es necesario, o se maneja de otra forma
        const response = await fetch(`${API_ROOT_URL}/purchase`, purchaseData); // Ajusta la ruta del endpoint según tu backend
        return response.data;
    } catch (error) {
        console.error('Error sending purchase data:', error);
        throw error;
    }
};
