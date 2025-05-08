import { useState } from "react";


function Categorias() {
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('');
    const handleCategoriaClick = (event) => {
        const categoria = event.target.value;
        setCategoriaSeleccionada(categoria);

    const UrlPorCategoria = {
        categoria: '/',
        aseoPersonal: '',
        hogar: '',
        bienestar: '',
        mascotas: '',
    };
    
    };
   
}

export default Categorias;