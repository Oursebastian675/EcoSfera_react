import { useNavigate } from 'react-router-dom';
import { useCarShop } from '../components/CarShop';
import logoEcoSfera from '../assets/logoEcoSfera.png';
import './Checkout.css'

function Checkout() {
    const navigate = useNavigate();
    const { cartItems } = useCarShop();

    const handleGoBack = () => {
        navigate(-1);
    };

    const handleContact = () => {
        // Aquí puedes implementar la lógica de comunicación
        console.log('Contacto');
    };

    const handlePurchase = () => {
        // Aquí puedes implementar la lógica de compra
        console.log('Compra realizada');
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
                            <p>Precio: ${item.precio * item.quantity}</p>
                        </div>
                    </div>
                ))}
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