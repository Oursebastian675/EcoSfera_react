function Encabezado() {
    return (
        <header>
            <div className="contenedor">
                <div className="cabecera">
                    <div className="Logo">
                        <img src="src/assets/logoEcoSfera.png" alt="LogoEcoSfera" /></div>
                    <div className="titulo"><p>Eco</p></div>
                    <div className="titulo2"><span>Sfera</span></div>


                    <div className="busqueda">Busqueda</div>
                    <div className="lupa"></div>


                    <select className="categorias_opciones" name="categorias" id="categoria">
                        <option value="">Categorias</option>
                        <option value="aseoPersonal">Aseo personal</option>
                        <option value="hogar">Hogar</option>
                        <option value="bienestarYBelleza">Bienestar y belleza</option>
                        <option value="mascotas">Mascotas</option>
                    </select>

                    

                    <button type="button" id="btn-blog" class="blog">Blog</button>
                    <button type="button" id="btn-ingresar" class="ingresar">Ingresar</button>
                    <div className="carrito_compras"></div>
                </div>
            </div>
        </header>
    )
}

export default Encabezado;