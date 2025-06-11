import React, { useState, useEffect } from 'react';
import { crearVenta } from '../services/api';
import Swal from 'sweetalert2';
import './Login.css';
import { useCarShop } from '../components/CarShop';
import { PDFDownloadLink, pdf } from '@react-pdf/renderer';
import FacturaPDF from '../components/FacturaPDF';

function ConfirmPurchase() {
    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        direccion: '',
        numeroTelefono: '',
        tipoDocumento: '',
        numeroDocumento: '',
        metodoPago: 'tarjeta_credito',
    });

    const { cartItems, removeFromCart, clearCart } = useCarShop(); // Agregar clearCart
    const [userId, setUserId] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        // Calcular el total cuando cambien los items del carrito
        const totalPrice = cartItems.reduce((sum, item) => sum + (item.precio * item.quantity), 0);
        setTotal(totalPrice);

        // Obtener el ID del usuario y datos del usuario actual desde sessionStorage
        const storedUser = sessionStorage.getItem('usuario'); // Cambiado de 'usuarioActual' a 'usuario'
        if (storedUser) {
            try {
                const userData = JSON.parse(storedUser);
                if (userData && userData.id) {
                    setUserId(userData.id);
                    setFormData(prevData => ({
                        ...prevData,
                        nombre: userData.nombreCompleto.split(' ')[0] || '', // Extraer el nombre del nombreCompleto
                        apellido: userData.nombreCompleto.split(' ')[1] || '', // Extraer el apellido del nombreCompleto
                    }));
                }
            } catch (e) {
                console.error("Error al parsear datos de usuario:", e);
            }
        }
    }, [cartItems]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const generarFactura = (datosVenta, resultadoVenta) => {
        const contenidoFactura = `
            ===== FACTURA DE COMPRA =====
            Fecha: ${new Date().toLocaleDateString()}
            DATOS DEL CLIENTE
            Nombre: ${datosVenta.nombre} ${datosVenta.apellido}
            Documento: ${datosVenta.tipoDocumento} ${datosVenta.numeroDocumento}
            Dirección: ${datosVenta.direccion}
            Teléfono: ${datosVenta.telefono}

            PRODUCTOS
            ${cartItems.map(item => `
            ${item.nombre}
            Cantidad: ${item.quantity}
            Precio Unitario: $${item.precio.toLocaleString()}
            Subtotal: $${(item.quantity * item.precio).toLocaleString()}
            `).join('\n')}

            TOTAL A PAGAR: $${total.toLocaleString()}

            Método de Pago: ${datosVenta.metodoPago}
            Gracias por confiar en EcoSfera tu tienda virtual de confianza.
            ===========================
        `;
    
        // Crear un blob con el contenido de la factura
        const blob = new Blob([contenidoFactura], { type: 'text/plain' });
        const url = window.URL.createObjectURL(blob);
        
        // Crear un enlace temporal y hacer clic en él para descargar
        const a = document.createElement('a');
        a.href = url;
        a.download = `factura_${resultadoVenta.id}.txt`;
        document.body.appendChild(a);
        a.click();
        
        // Limpiar
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        const token = sessionStorage.getItem('token');
        const userData = JSON.parse(sessionStorage.getItem('usuario'));

        if (!token || !userData) {
            Swal.fire({
                icon: 'error',
                title: 'Error de autenticación',
                text: 'Debes iniciar sesión para realizar una compra.'
            });
            setIsLoading(false);
            return;
        }

        if (cartItems.length === 0) {
            Swal.fire({
                icon: 'warning',
                title: 'Carrito vacío',
                text: 'No hay productos en el carrito para realizar la compra.'
            });
            setIsLoading(false);
            return;
        }

        if (!userId) {
            Swal.fire({
                icon: 'error',
                title: 'Error de Usuario',
                text: 'No se pudo obtener la información del usuario. Intenta recargar la página.'
            });
            setIsLoading(false);
            return;
        }

        const itemsParaBackend = cartItems.map(item => ({
            productoId: item.id,
            cantidad: item.quantity,
            precioUnitario: item.precio // Agregamos el precio unitario
        }));

        const datosParaBackend = {
            userId: userId,
            items: itemsParaBackend,
            nombre: formData.nombre,
            apellido: formData.apellido,
            direccion: formData.direccion,
            telefono: formData.numeroTelefono,
            tipoDocumento: formData.tipoDocumento,
            numeroDocumento: formData.numeroDocumento,
            metodoPago: formData.metodoPago,
            total: total // Agregamos el total de la venta
        };

        try {
            const resultadoVenta = await crearVenta(datosParaBackend, token);
            if (resultadoVenta.id) {
                // Generar el PDF
                const pdfDoc = <FacturaPDF 
                    datosVenta={datosParaBackend}
                    resultadoVenta={resultadoVenta}
                    cartItems={cartItems}
                    total={total}
                />;

                // Convertir el documento a un blob y descargarlo
                const pdfBlob = await pdf(pdfDoc).toBlob();
                const url = URL.createObjectURL(pdfBlob);
                const link = document.createElement('a');
                link.href = url;
                link.download = `factura_${resultadoVenta.id}.pdf`;
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                URL.revokeObjectURL(url);
                
                // Crear FormData para enviar el correo
                const formData = new FormData();
                formData.append('to', userData.email);
                formData.append('subject', `Factura de compra #${resultadoVenta.id}`);
                formData.append('attachment', pdfBlob, `factura_${resultadoVenta.id}.pdf`);

                // Enviar el correo a través del backend
                await fetch('/api/enviar-factura', {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${token}`
                    },
                    body: formData
                });

                Swal.fire({
                    icon: 'success',
                    title: '¡Compra Exitosa!',
                    text: 'Tu compra ha sido procesada. La factura se ha descargado y enviado a tu correo electrónico.'
                });

                clearCart();
                setFormData({
                    nombre: '', apellido: '', direccion: '', numeroTelefono: '',
                    tipoDocumento: '', numeroDocumento: '', metodoPago: 'tarjeta_credito',
                });
            }
        } catch (err) {
            Swal.fire({
                icon: 'error',
                title: 'Error en la Compra',
                text: err.message || 'Ocurrió un problema al procesar tu compra. Inténtalo de nuevo.'
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit} className="form">
                <div className="form-header">
                    <h2 className="title">Confirmación de Compra<br/><span>Complete sus datos</span></h2>
                </div>

                <div className="form-body">
                    <div className="input-group">
                        <input
                            type="text"
                            id="nombre"
                            name="nombre"
                            value={formData.nombre}
                            onChange={handleChange}
                            required
                            placeholder="Nombre"
                            className="input"
                        />
                    </div>

                    <div className="input-group">
                        <input
                            type="text"
                            id="apellido"
                            name="apellido"
                            value={formData.apellido}
                            onChange={handleChange}
                            required
                            placeholder="Apellido"
                            className="input"
                        />
                    </div>

                    <div className="input-group">
                        <input
                            type="text"
                            id="direccion"
                            name="direccion"
                            value={formData.direccion}
                            onChange={handleChange}
                            required
                            placeholder="Dirección"
                            className="input"
                        />
                    </div>

                    <div className="input-group">
                        <input
                            type="tel"
                            id="numeroTelefono"
                            name="numeroTelefono"
                            value={formData.numeroTelefono}
                            onChange={handleChange}
                            placeholder="Número de Teléfono"
                            className="input"
                        />
                    </div>

                    <div className="input-group">
                        <select
                            id="tipoDocumento"
                            name="tipoDocumento"
                            value={formData.tipoDocumento}
                            onChange={handleChange}
                            required
                            className="input"
                        >
                            <option value="">Seleccione tipo de documento...</option>
                            <option value="CC">Cédula de Ciudadanía</option>
                            <option value="CE">Cédula de Extranjería</option>
                            <option value="PASAPORTE">Pasaporte</option>
                            <option value="NIT">NIT (Empresa)</option>
                        </select>
                    </div>

                    <div className="input-group">
                        <input
                            type="text"
                            id="numeroDocumento"
                            name="numeroDocumento"
                            value={formData.numeroDocumento}
                            onChange={handleChange}
                            required
                            placeholder="Número de Documento"
                            className="input"
                        />
                    </div>

                    <div className="input-group">
                        <select
                            id="metodoPago"
                            name="metodoPago"
                            value={formData.metodoPago}
                            onChange={handleChange}
                            className="input"
                        >
                            <option value="tarjeta_credito">Tarjeta de Crédito</option>
                            <option value="pse">PSE</option>
                            <option value="efecty">Efecty</option>
                        </select>
                    </div>
                </div>

                <div className="order-summary">
                    <h3 className="title">Resumen del Pedido</h3>
                    {cartItems.length > 0 ? (
                        <>
                            <ul className="cart-summary">
                                {cartItems.map(item => (
                                    <li key={item.id} className="cart-item">
                                        <div className="item-details">
                                            <span>{item.nombre}</span>
                                            <span>Cantidad: {item.quantity}</span>
                                            <span>Precio: ${item.precio * item.quantity}</span>
                                        </div>
                                        <button 
                                            type="button"
                                            onClick={() => removeFromCart(item.id)}
                                            className="remove-item"
                                        >
                                            ×
                                        </button>
                                    </li>
                                ))}
                            </ul>
                            <div className="cart-total">
                                <strong>Total: ${total}</strong>
                            </div>
                        </>
                    ) : (
                        <p className="cart-empty">No hay productos en tu carrito.</p>
                    )}
                </div>

                <button 
                    type="submit" 
                    disabled={isLoading || cartItems.length === 0}
                    className="button-confirm"
                >
                    {isLoading ? 'Procesando...' : 'Realizar Compra'}
                </button>
            </form>
        </div>
    );
}

export default ConfirmPurchase;
    