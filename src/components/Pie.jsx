import React from 'react';
import { Link } from 'react-router-dom';
// import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa'; // Si usas iconos

function Pie() {
    return (
        <footer className="main-footer">
            <div className="footer-content">
                {/* Sección de Enlaces de Navegación PRINCIPAL */}
                <div className="footer-section links-section">
                    <h3>Explora</h3>
                    <ul>
                        <li><Link to="/">Página Principal</Link></li>
                        {/* Puedes elegir a qué categoría de productos enlazar desde aquí */}
                        <li><Link to="/productos/aseo-personal">Nuestros Productos</Link></li>
                        {/* O, si no quieres enlazar a una categoría específica, simplemente omite "Nuestros Productos" */}
                        
                        <li><Link to="/blog">Blog</Link></li>
                        <li><Link to="/graficas">Graficas de ventas</Link></li>
                        <li><Link to="/login">Ingresar</Link></li> {/* Apunta a tu ruta de login existente */}
                        <li><Link to="/registro">Registrarse</Link></li> {/* Apunta a tu ruta de registro existente */}
                        
                        {/* Los siguientes enlaces se eliminan porque no tienes las páginas creadas */}
                        {/* <li><Link to="/acerca-de-nosotros">Acerca de Nosotros</Link></li> */}
                        {/* <li><Link to="/preguntas-frecuentes">Preguntas Frecuentes</Link></li> */}
                    </ul>
                </div>

                {/* Sección de Información y Contacto */}
                <div className="footer-section info-section">
                    <h3>Contáctanos</h3>
                    <p>Medellín, Antioquia, Colombia</p>
                    <p>Programa: Técnico Auxiliar en Desarrollo Web</p>
                    <p>Correo: <a href="mailto:info@tutienda.com">info@tutienda.com</a></p>
                    <p>Teléfono: <a href="tel:+573001234567">+57 300 123 4567</a></p>
                </div>

                {/* Sección de Legal y Redes Sociales */}
                <div className="footer-section social-terms-section">
                    <h3>Legal & Redes</h3>
                    {/* Los siguientes enlaces se eliminan porque no tienes las páginas creadas */}
                    <ul>
                        {/* <li><Link to="/terminos-condiciones">Términos y Condiciones</Link></li> */}
                        {/* <li><Link to="/politica-privacidad">Política de Privacidad</Link></li> */}
                        {/* <li><Link to="/politica-reembolso">Política de Reembolso</Link></li> */}
                        {/* Si quieres tener algo aquí, puedes poner un enlace a tu página de inicio, por ejemplo: */}
                        <li><Link to="/">Ver Términos y Políticas</Link></li>
                    </ul>
                    
                    {/* Sección de Redes Sociales */}
                    <div className="social-links">
                        <a href="https://facebook.com/tutienda" target="_blank" rel="noopener noreferrer">Facebook</a>
                        <a href="https://instagram.com/tutienda" target="_blank" rel="noopener noreferrer">Instagram</a>
                        <a href="https://wa.me/573001234567" target="_blank" rel="noopener noreferrer">WhatsApp</a>
                    </div>
                </div>
            </div>

            {/* Sección de Copyright */}
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Tu Tienda Naturalista. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
}

export default Pie;