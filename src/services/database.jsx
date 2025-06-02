// Obtener usuarios del localStorage o usar el array predefinido si no hay datos
export let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [
    {
        usuario: "admin",
        password: "123456",
        nombre: "Sebastian"
    },
    {
        usuario: "partner",
        password: "2004",
        nombre: "Isaac Garcia"
    },
    {
        usuario: "partner#2",
        password: "2104",
        nombre: "Carol"
    }
];

// Función para actualizar usuarios
export const actualizarUsuarios = (nuevosUsuarios) => {
    usuarios = nuevosUsuarios;
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
};
