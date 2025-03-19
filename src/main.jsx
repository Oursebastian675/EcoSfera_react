import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Encabezado from './Encabezado'
import Carrusel from './Carrusel'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Encabezado />
    <Carrusel />
  </StrictMode>
)
