import Inicio from '../pages/Inicio';
import Login from '../pages/Login';
import Blog from '../pages/Blog';
import AseoPersonal from '../pages/AseoPersonal';
import BienestarYBelleza from '../pages/BienestarYBelleza';
import Hogar from '../pages/Hogar';
import Mascotras from '../pages/Mascotas';

export let enrutador = [
    {
        path: '/',
        element: <Inicio />
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/blog',
        element: <Blog />
    },
    {
        path: '/productos/aseo-personal',
        element: <AseoPersonal /> 
    },
    {
        path: '/productos/bienestar',
        element: <BienestarYBelleza /> 
    },
    {
        path: '/productos/hogar',
        element: <Hogar /> 
    },
    {
        path: '/productos/mascotas',
        element: <Mascotras />
    },

];
