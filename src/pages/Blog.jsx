import "./Blog.css";
import Encabezado from "../components/Encabezado.jsx";
import Pie from "../components/Pie.jsx";
import Ecologia from "../assets/ecologia.blog.jpg";
import Logo from "../assets/logoEcoSfera.png";

function Blog() {
    return (
        <section>
            <Encabezado />
<div className="Contenedor">

            <div className="Cuadro_blog">
                <div>
                    <img className="blog_img" src={Ecologia} alt="Ecologia" />
                    <div className="Contenido_blog">
                        
                        <img className="logo_blog" src={Logo} alt="Logo EcoSfera" />
                         EcoSfera
                        
                        <div className="Contenido_blog">
                            1. ¿Qué es una tienda naturalista?
Una tienda naturalista es mucho más que un lugar donde se venden productos naturales.
Es un espacio pensado para promover el equilibrio entre el cuerpo, la mente y el entorno.
Aquí se priorizan los alimentos integrales, los remedios a base de hierbas, la cosmética sin químicos y el consumo consciente.
Todo está seleccionado con un criterio ético y sustentable.
                        </div>
                    </div>
                </div>
            </div>
            <div className="Cuadro_blog">
                <div>
                    <img className="blog_img" src={Ecologia} alt="Ecologia" />
                    <div className="Contenido_blog">
                        
                        <img className="logo_blog" src={Logo} alt="Logo EcoSfera" />
                         EcoSfera
                        
                        <div className="Contenido_blog">
                            2. El corazón de la tienda
Los estantes están repletos de productos orgánicos, muchos a granel: granos, semillas, especias, tés, infusiones y frutas deshidratadas. 
Todo está dispuesto con calidez, en frascos de vidrio, cestas de mimbre o bolsas compostables.
Hay una armonía visual y aromática que invita a explorar sin prisa. Aquí cada cosa tiene su lugar y su historia.


                        </div>
                    </div>
                </div>
            </div>
            <div className="Cuadro_blog">
                <div>
                    <img className="blog_img" src={Ecologia} alt="Ecologia" />
                    <div className="Contenido_blog">
                        
                        <img className="logo_blog" src={Logo} alt="Logo EcoSfera" />
                         EcoSfera
                        
                        <div className="Contenido_blog">
3. Filosofía natural
El enfoque naturalista se basa en la idea de que la naturaleza tiene sus propios caminos para sanar.
 Por eso se priorizan ingredientes puros, sin aditivos ni procesos industriales. No se trata solo de evitar lo artificial, sino de reconectarse con lo esencial.
  Esta filosofía atraviesa todo: desde lo que se vende hasta cómo se presenta y se educa al público.
                        </div>
                    </div>
                </div>
            </div>
            <div className="Cuadro_blog">
                <div>
                    <img className="blog_img" src={Ecologia} alt="Ecologia" />
                    <div className="Contenido_blog">
                        
                        <img className="logo_blog" src={Logo} alt="Logo EcoSfera" />
                         EcoSfera
                        
                        <div className="Contenido_blog">
4. Cosmética y cuidado personal
Los productos de higiene y belleza en una tienda naturalista están libres de derivados del petróleo, parabenos, fragancias sintéticas y testeo animal.
 Aquí se encuentran shampoos sólidos, aceites esenciales, cremas hechas con extractos vegetales y jabones artesanales. 
 La propuesta es cuidarse sin contaminar, tanto al cuerpo como al planeta.
                        </div>
                    </div>
                </div>
            </div>
            <div className="Cuadro_blog">
                <div>
                    <img className="blog_img" src={Ecologia} alt="Ecologia" />
                    <div className="Contenido_blog">
                        
                        <img className="logo_blog" src={Logo} alt="Logo EcoSfera" />
                         EcoSfera
                        
                        <div className="Contenido_blog">
 5. Un lugar para aprender
Muchas tiendas naturalistas no solo venden: también enseñan. Hay rincones con libros sobre nutrición consciente, herbolaria, medicina tradicional, ayurveda o fermentación.
 Algunas ofrecen talleres o charlas. El objetivo es compartir saberes que muchas veces han sido olvidados, pero que siguen siendo profundamente útiles.


                        </div>
                    </div>
                </div>
            </div>
            <div className="Cuadro_blog">
                <div>
                    <img className="blog_img" src={Ecologia} alt="Ecologia" />
                    <div className="Contenido_blog">
                        
                        <img className="logo_blog" src={Logo} alt="Logo EcoSfera" />
                         EcoSfera
                        
                        <div className="Contenido_blog">
6. Consumo responsable y comunidad
Comprar en una tienda naturalista es un acto de elección. 
Se apoya a productores locales, cooperativas, huertas orgánicas y emprendimientos artesanales.
 Cada producto refleja un compromiso con el ambiente y con formas de vida más sanas y justas. 
 No es solo consumo: es pertenencia a una comunidad que busca vivir mejor.
                        </div>
                    </div>
                </div>
            </div>



            </div>
            <Pie />

        </section>
    )

}
export default Blog