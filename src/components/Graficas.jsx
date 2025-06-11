import React, { useState, useEffect } from 'react';
import './Graficas.css'; // Ahora este archivo debería existir y ser encontrado

function Graficas() {
  const [tableData, setTableData] = useState([]);
  const [currentPlotUrl, setCurrentPlotUrl] = useState('');
  const [selectedGraph, setSelectedGraph] = useState(null); // Para controlar qué gráfica mostrar

  // Función para obtener los datos de la tabla
  const fetchTableData = async () => {
    try {
      const response = await fetch('http://localhost:5000/data'); // URL de tu API Flask
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setTableData(data);
      setCurrentPlotUrl(''); // Ocultar gráfica si se muestra la tabla
      setSelectedGraph('table');
    } catch (error) {
      console.error("Error al obtener los datos de la tabla:", error);
    }
  };

  // Función para obtener la URL de una gráfica
  const getPlot = (plotType) => {
    // Añade un timestamp para evitar la caché del navegador al recargar la misma gráfica
    // La URL debe apuntar a tu API Flask que devuelve la imagen de la gráfica
    const url = `http://localhost:5000/plot/${plotType}?_=${new Date().getTime()}`;
    setCurrentPlotUrl(url);
    setSelectedGraph(plotType);
    setTableData([]); // Ocultar tabla si se muestra una gráfica
  };

  // Opciones de gráficas disponibles
  const graphOptions = [
    { id: 'ventas_categoria', name: '1. Total de Ventas por Categoría' },
    { id: 'cantidad_promedio_categoria', name: '2. Cantidad Promedio de Productos por Categoría' },
    { id: 'distribucion_precios', name: '3. Distribución de Precios de Productos' },
    { id: 'top_5_productos', name: '4. Top 5 Productos por Total de Ventas' },
    { id: 'cantidad_precio_scatter', name: '5. Relación entre Cantidad y Precio Unitario (Scatter Plot)' },
    { id: 'proporcion_categorias', name: '6. Proporción de Productos por Categoría (Pie Chart)' },
  ];

  return (
    <div className="App"> {/* Usar "App" como className general para tus estilos */}
      <h1>📊 Análisis de Datos de Productos</h1>

      <div className="menu-options">
        {/* Botón para mostrar la tabla de datos */}
        <button onClick={fetchTableData}>Mostrar Tabla de Datos Original</button>
        {/* Botón para abrir el menú de selección de gráficas */}
        <button onClick={() => setSelectedGraph('menu')}>Ver Gráficas de Análisis</button>
      </div>

      {/* Condición para mostrar la tabla de datos */}
      {selectedGraph === 'table' && (
        <div className="data-table">
          <h2>Tabla de Datos Original</h2>
          <table>
            <thead>
              <tr>
                <th>Categoría</th>
                <th>Producto</th>
                <th>Cantidad</th>
                <th>Precio</th>
                <th>Total Venta</th>
              </tr>
            </thead>
            <tbody>
              {/* Mapea los datos de la tabla para renderizar cada fila */}
              {tableData.map((row, index) => (
                <tr key={index}>
                  <td>{row.Categoría}</td>
                  <td>{row.Producto}</td>
                  <td>{row.Cantidad}</td>
                  <td>{row.Precio.toLocaleString('es-CO', { style: 'currency', currency: 'COP' })}</td> {/* Formatear precio a moneda colombiana */}
                  <td>{row.Total_Venta.toLocaleString('es-CO', { style: 'currency', currency: 'COP' })}</td> {/* Formatear total venta a moneda colombiana */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Condición para mostrar el menú de selección de gráficas */}
      {selectedGraph === 'menu' && (
        <div className="plot-menu">
          <h2>Selecciona la gráfica que deseas ver</h2>
          <div className="menu-options">
            {/* Mapea las opciones de gráficas para crear botones */}
            {graphOptions.map(option => (
              <button key={option.id} onClick={() => getPlot(option.id)}>
                {option.name}
              </button>
            ))}
            {/* Botón para volver al menú principal (ocultar el menú de gráficas) */}
            <button onClick={() => setSelectedGraph(null)}>Volver</button>
          </div>
        </div>
      )}

      {/* Condición para mostrar la gráfica seleccionada */}
      {currentPlotUrl && selectedGraph !== 'table' && selectedGraph !== 'menu' && (
        <div className="plot-display">
          {/* La imagen de la gráfica se carga desde la URL de la API Flask */}
          <img src={currentPlotUrl} alt="Gráfica de Datos" />
          {/* Si tu API Flask devolviera el texto de análisis junto con la imagen,
              lo manejarías aquí. Por ahora, se asume que solo devuelve la imagen. */}
        </div>
      )}
    </div>
  );
}

export default Graficas;
