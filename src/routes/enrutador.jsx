import Inicio from '../pages/Inicio';
import Login from '../pages/Login';
import Blog from '../pages/Blog';

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
];
