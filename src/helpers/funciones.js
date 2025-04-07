import Swal from "sweetalert2";

// Alerta de éxito cuando el login es exitoso
export function alertaConfirmacion() {
    Swal.fire({
        title: "Correcto!",
        text: "Ha ingresado de forma correcta!",
        icon: "success"
    });
}

// Alerta de error cuando las credenciales son incorrectas
export function alertaError(mensaje) {
    Swal.fire({
        title: "Error!",
        text: mensaje,
        icon: "error"
    });
}

// Alerta con cuenta regresiva para redirección
export function alertaRedireccion(redireccion, path, mensaje) {
    let timerInterval;
    Swal.fire({
        title: mensaje,
        html: "Te redirigiré en <b></b> segundos.",
        timer: 2000,
        icon: "success",
        didOpen: () => {
            Swal.showLoading();
            const timer = Swal.getPopup().querySelector("b");
            timerInterval = setInterval(() => {
                timer.textContent = `${Math.ceil(Swal.getTimerLeft() / 1000)}`; // Mostrar la cuenta regresiva
            }, 1000);
        },
        willClose: () => {
            clearInterval(timerInterval); // Limpiar el intervalo después de que la alerta se cierre
            redireccion(path); // Redirigir al path cuando la alerta se cierre
        }
    })
}