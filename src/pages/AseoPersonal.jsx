import Encabezado from "../components/Encabezado";
import Pie from "../components/Pie";
import "./Productos.css";


import Esmalte from "../assets/producto_esmalte_ecologico.jpeg";
import Bloqueador from "../assets/producto_bloqueador.jpeg";
import Cesto from "../assets/producto_cesto_fibras_naturales.jpeg";
import Cortinas from "../assets/producto_cortinas_de_algodon.jpeg";
import Hilo from "../assets/producto_hilo_dental_seda.jpeg";
import ShampooCafe from "../assets/producto_shampoo_de_cafe.jpeg";
import Shampoo from "../assets/producto_shampoo.jpeg";
import Snacks from "../assets/producto_snacks_organicos.jpeg";


function AseoPersonal() {
    return (
        <div>
            <Encabezado />
            
            {/* <div className="banner_productos">
                <p className="texto_productos"> <strong className="Negrita_info">Bienvenido/a a la seccion de Aseo personal</strong>

                    

                    <div></div></p>
            </div> */}

            <div className="productos_generales">
                <div >
                    <img className="img_producto_intermedio" src={Esmalte} alt="Esmalte ecologico" />
                    <div className="texto_img_intermedio">Esmalte</div>
                    <div className="texto_img_intermedio">$5.950</div>
                    <button className="btn-add-cart">Añadir al carrito</button>
                </div>
                <div >
                    <img className="img_producto_intermedio" src={Bloqueador} alt="Bloqueador solar" />
                    <div className="texto_img_intermedio">Bloqueador</div>
                    <div className="texto_img_intermedio">$21.000</div>
                    <button className="btn-add-cart">Añadir al carrito</button>
                </div>
                <div >
                    <img className="img_producto_intermedio" src={Cesto} alt="Cesto de fibras naturales" />
                    <div className="texto_img_intermedio">Cesta de fibras</div>
                    <div className="texto_img_intermedio">$15.000</div>
                    <button className="btn-add-cart">Añadir al carrito</button>
                </div>
                <div >
                    <img className="img_producto_intermedio" src={Cortinas} alt="Cortinas de algodon" />
                    <div className="texto_img_intermedio"> Cortinas de algodon</div>
                    <div className="texto_img_intermedio">$17.950</div>
                    <button className="btn-add-cart">Añadir al carrito</button>
                </div>
                <div >
                    <img className="img_producto_intermedio" src={Hilo} alt="Hilo dental" />
                    <div className="texto_img_intermedio"> Hilo dental de seda</div>
                    <div className="texto_img_intermedio">$5.950</div>
                    <button className="btn-add-cart">Añadir al carrito</button>
                </div>
                <div >
                    <img className="img_producto_intermedio" src={ShampooCafe} alt="Shampoo de café" />
                    <div className="texto_img_intermedio"> Shampoo de cafe</div>
                    <div className="texto_img_intermedio">$19.999</div>
                    <button className="btn-add-cart">Añadir al carrito</button>
                </div>
                <div >
                    <img className="img_producto_intermedio" src={Shampoo} alt="Shampoo" />
                    <div className="texto_img_intermedio"> Shampoo</div>
                    <div className="texto_img_intermedio">$12.900</div>
                    <button className="btn-add-cart">Añadir al carrito</button>
                </div>
                <div >
                    <img className="img_producto_intermedio" src={Snacks} alt="Snacks organicos" />
                    <div className="texto_img_intermedio">
                        Snacks organicos
                    </div>
                    <div className="texto_img_intermedio">$6.950</div>
                    <button className="btn-add-cart">Añadir al carrito</button>
                </div>
            </div>


            <Pie />
            </div>

            
               );

}
export default AseoPersonal;