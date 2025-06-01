import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SelectorDeCategorias() {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('');
  const navigate = useNavigate();

  const handleChangeCategoria = (event) => {
    const categoria = event.target.value;
    if (categoria) {
      navigate(`/${categoria}`);
    }
  };

  return (
    <div>
      <select className="categorias_opciones" value={categoriaSeleccionada} onChange={handleChangeCategoria}>
        <option value="/">Productos &darr;</option>
        <option value="productos/aseo-personal">Aseo Personal</option>
        <option value="productos/hogar">Hogar</option>
        <option value="productos/bienestar">Bienestar y belleza</option>
        <option value="productos/mascotas">Mascotas</option>
        <option value="productos/alimentos">Alimentos</option>
      </select>
    </div>
  );
}

export default SelectorDeCategorias;