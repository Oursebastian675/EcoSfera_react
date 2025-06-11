import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import { enrutador } from './routes/enrutador.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

let router = createBrowserRouter(enrutador)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
)


/* cd C:\Users\USUARIO\Documents\Sebastian\React\py_grafico_wed\end_grafico\
python app.py
 */