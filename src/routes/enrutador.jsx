import Inicio from '../pages/Inicio';
import Login from '../pages/Login';
import Blog from '../pages/Blog';
import AseoPersonal from '../pages/AseoPersonal';
import BienestarYBelleza from '../pages/BienestarYBelleza';
import Hogar from '../pages/Hogar';
import Mascotas from '../pages/Mascotas';
import Alimentos from '../pages/Alimentos';
import { CarShopProvider } from '../components/CarShop';
import Checkout from '../pages/Checkout';
import Registro from '../pages/Registro';

export let enrutador = [
    {
        path: '/',
        element: (
            <CarShopProvider>
                <Inicio />
            </CarShopProvider>
        )
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/blog',
        element: (
            <CarShopProvider>
                <Blog />
            </CarShopProvider>
        )
    },
    {
        path: '/productos/aseo-personal',
        element: (
            <CarShopProvider>
                <AseoPersonal />
            </CarShopProvider>
        )
    },
    {
        path: '/productos/bienestar',
        element: (
            <CarShopProvider>
                <BienestarYBelleza />
            </CarShopProvider>
        )
    },
    {
        path: '/productos/hogar',
        element: (
            <CarShopProvider>
                <Hogar />
            </CarShopProvider>
        )
    },
    {
        path: '/productos/mascotas',
        element: (
            <CarShopProvider>
                <Mascotas />
            </CarShopProvider>
        )
    },
    {
        path: '/productos/alimentos',
        element: (
            <CarShopProvider>
                <Alimentos />
            </CarShopProvider>
        )
    },
    {
        path: '/checkout',
        element: (
            <CarShopProvider>
                <Checkout />
            </CarShopProvider>
        )
    },
    {
        path: '/registro',
        element: <Registro />
    }
];
