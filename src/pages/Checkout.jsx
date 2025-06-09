import { useNavigate } from 'react-router-dom';
import { useCarShop } from '../components/CarShop';
import logoEcoSfera from '../assets/logoEcoSfera.png';
import './Checkout.css'
import Swal from 'sweetalert2';

function Checkout() {
    const navigate = useNavigate();
    const { cartItems } = useCarShop();

    // Calcular el total de la compra
    const total = cartItems.reduce((sum, item) => sum + (item.precio * item.quantity), 0);

    const handleGoBack = () => {
        navigate(-1);
    };

    const handleContact = () => {
        console.log('Contacto');
    };

    const handlePurchase = () => {
        if (cartItems.length === 0) {
            Swal.fire({
                icon: 'warning',
                title: 'Carrito Vacío',
                text: 'Tu carrito está vacío. Agrega productos antes de continuar.',
                confirmButtonText: 'Ok'
            });
            return;
        }

        const usuarioActual = sessionStorage.getItem('usuario');
        if (usuarioActual) {
            navigate('/purchase');
        } else {
            navigate('/login');
        }
    };

    return (
        <div className="checkout-container">
            <header className="checkout-header">
                <button onClick={handleGoBack} className="back-button">
                    ←
                </button>
                <img src={logoEcoSfera} alt="EcoSfera Logo" className="checkout-logo" />
                <button onClick={handleContact} className="contact-button">
                    Contacto
                </button>
            </header>

            <main className="checkout-products">
                <h2>Resumen de tu compra</h2>
                {cartItems.map((item) => (
                    <div key={item.id} className="checkout-product-item">
                        <img src={item.imagen} alt={item.nombre} className="product-image" />
                        <div className="product-details">
                            <h3>{item.nombre}</h3>
                            <p>Cantidad: {item.quantity}</p>
                            <p>Precio unitario: ${item.precio}</p>
                            <p className="subtotal">Subtotal: ${item.precio * item.quantity}</p>
                        </div>
                    </div>
                ))}
                <div className="checkout-total">
                    <h3>Total a pagar: ${total}</h3>
                </div>
            </main>

            <footer className="checkout-footer">
                <button onClick={handlePurchase} className="purchase-button">
                    Comprar
                </button>
            </footer>
        </div>
    );
}

export default Checkout;