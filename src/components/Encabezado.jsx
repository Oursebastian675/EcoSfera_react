import Logo from "../assets/logoEcoSfera.png"
function Encabezado() {
    return (
        <header>
            <div className="contenedor">
                <div className="cabecera">
                    <div className="Logo">
                        <img src={Logo} alt="LogoEcoSfera" /></div>
                    <div className="titulo"><p>Eco</p></div>
                    <div className="titulo2"><span>Sfera</span></div>


                    
<button class="cssbuttons-io">
  <span>
    Busqueda
    <svg
      viewBox="0 0 19.9 19.7"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-labelledby="title desc"
      class="svg-icon search-icon"
    >
      <title>Search Icon</title>
      <desc id="desc">A magnifying glass icon.</desc>
      <g stroke="white" fill="none" class="search-path">
        <path d="M18.5 18.3l-5.4-5.4" stroke-linecap="square"></path>
        <circle r="7" cy="8" cx="8"></circle>
      </g>
    </svg>
  </span>
</button>



                    <select className="categorias_opciones" name="categorias" id="categoria">
                        <option value="">Categorias</option>
                        <option value="aseoPersonal">Aseo personal</option>
                        <option value="hogar">Hogar</option>
                        <option value="bienestarYBelleza">Bienestar y belleza</option>
                        <option value="mascotas">Mascotas</option>
                    </select>



<button class="btn-donate">Blog</button>


                    
                    
<button class="button">
  INGRESAR
  <svg fill="currentColor" viewBox="0 0 24 24" class="icon">
    <path
      clip-rule="evenodd"
      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
      fill-rule="evenodd"
    ></path>
  </svg>
</button>

                    <div className="carrito_compras"></div>
                </div>
            </div>
        </header>
    )
}

export default Encabezado;