import React, { useState, useEffect } from 'react';
import { crearUsuario, getUsuarioById, actualizarUsuario, eliminarUsuario } from '../services/api';
import Swal from 'sweetalert2';
import './ListaUsuarios.css';

function ListaUsuarios() {
    const [usuarios, setUsuarios] = useState([]);
    const [usuarioSeleccionado, setUsuarioSeleccionado] = useState(null);
    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        correo: '',
        telefono: '',
        edad: '',
        usuario: '',
        password: ''
    });
    const [cargando, setCargando] = useState(false);

    const cargarUsuarios = async () => {
        setCargando(true);
        try {
            const response = await fetch('http://localhost:8080/api/usuarios');
            if (!response.ok) {
                throw new Error('Error al cargar usuarios');
            }
            const data = await response.json();
            setUsuarios(data);
        } catch (error) {
            Swal.fire({
                title: 'Error',
                text: error.message,
                icon: 'error'
            });
        } finally {
            setCargando(false);
        }
    };

    useEffect(() => {
        cargarUsuarios();
    }, []);

    const handleVerDetalle = async (id) => {
        setCargando(true);
        try {
            const data = await getUsuarioById(id);
            setUsuarioSeleccionado(data);
        } catch (error) {
            Swal.fire({
                title: 'Error',
                text: error.message,
                icon: 'error'
            });
        } finally {
            setCargando(false);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleCrearUsuario = async (e) => {
        e.preventDefault();
        if (!formData.nombre || !formData.usuario || !formData.password) {
            Swal.fire({
                title: 'Error',
                text: 'Por favor complete los campos requeridos',
                icon: 'error'
            });
            return;
        }

        setCargando(true);
        try {
            const nuevoUsuario = await crearUsuario(formData);
            setUsuarios([...usuarios, nuevoUsuario]);
            setFormData({
                nombre: '',
                apellido: '',
                correo: '',
                telefono: '',
                edad: '',
                usuario: '',
                password: ''
            });
            Swal.fire({
                title: '¡Éxito!',
                text: 'Usuario creado correctamente',
                icon: 'success'
            });
        } catch (error) {
            Swal.fire({
                title: 'Error',
                text: error.message,
                icon: 'error'
            });
        } finally {
            setCargando(false);
        }
    };

    const handleEliminarUsuario = async (id) => {
        try {
            await Swal.fire({
                title: '¿Estás seguro?',
                text: 'Esta acción no se puede deshacer',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Sí, eliminar',
                cancelButtonText: 'Cancelar'
            }).then(async (result) => {
                if (result.isConfirmed) {
                    await eliminarUsuario(id);
                    setUsuarios(usuarios.filter(user => user.id !== id));
                    Swal.fire('¡Eliminado!', 'El usuario ha sido eliminado.', 'success');
                }
            });
        } catch (error) {
            Swal.fire({
                title: 'Error',
                text: error.message,
                icon: 'error'
            });
        }
    };

    if (cargando) {
        return <div className="loading">Cargando...</div>;
    }

    return (
        <div className="lista-usuarios-container">
            <h2>Lista de Usuarios</h2>
            
            <div className="usuarios-grid">
                {usuarios.map(user => (
                    <div key={user.id} className="usuario-card">
                        <h3>{user.nombre} {user.apellido}</h3>
                        <p>Usuario: {user.usuario}</p>
                        <p>Correo: {user.correo}</p>
                        <div className="usuario-actions">
                            <button onClick={() => handleVerDetalle(user.id)}>Ver Detalle</button>
                            <button onClick={() => handleEliminarUsuario(user.id)} className="delete-btn">
                                Eliminar
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {usuarioSeleccionado && (
                <div className="usuario-detalle">
                    <h3>Detalle del Usuario</h3>
                    <p><strong>ID:</strong> {usuarioSeleccionado.id}</p>
                    <p><strong>Nombre:</strong> {usuarioSeleccionado.nombre} {usuarioSeleccionado.apellido}</p>
                    <p><strong>Usuario:</strong> {usuarioSeleccionado.usuario}</p>
                    <p><strong>Correo:</strong> {usuarioSeleccionado.correo}</p>
                    <p><strong>Teléfono:</strong> {usuarioSeleccionado.telefono}</p>
                    <p><strong>Edad:</strong> {usuarioSeleccionado.edad}</p>
                    <button onClick={() => setUsuarioSeleccionado(null)}>Cerrar</button>
                </div>
            )}

            <div className="crear-usuario-form">
                <h3>Crear Nuevo Usuario</h3>
                <form onSubmit={handleCrearUsuario}>
                    <div className="form-group">
                        <input
                            type="text"
                            name="nombre"
                            value={formData.nombre}
                            onChange={handleInputChange}
                            placeholder="Nombre"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            name="apellido"
                            value={formData.apellido}
                            onChange={handleInputChange}
                            placeholder="Apellido"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="email"
                            name="correo"
                            value={formData.correo}
                            onChange={handleInputChange}
                            placeholder="Correo electrónico"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="tel"
                            name="telefono"
                            value={formData.telefono}
                            onChange={handleInputChange}
                            placeholder="Teléfono"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="number"
                            name="edad"
                            value={formData.edad}
                            onChange={handleInputChange}
                            placeholder="Edad"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            name="usuario"
                            value={formData.usuario}
                            onChange={handleInputChange}
                            placeholder="Nombre de usuario"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            placeholder="Contraseña"
                            required
                        />
                    </div>
                    <button type="submit" className="submit-btn">
                        Crear Usuario
                    </button>
                </form>
            </div>
        </div>
    );
}

export default ListaUsuarios;