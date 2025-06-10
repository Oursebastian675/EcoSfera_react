import React, { createContext, useState, useContext, useEffect } from 'react';

const CarShop = createContext();

export function CarShopProvider({ children }) {
    const [cartItems, setCartItems] = useState(() => {
        // Intentar recuperar los items del carrito desde localStorage al iniciar
        const savedCart = localStorage.getItem('cartItems');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    // Guardar los items del carrito en localStorage cada vez que cambien
    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (product) => {
        setCartItems(prevItems => {
            const existingItem = prevItems.find(item => item.id === product.id);
            if (existingItem) {
                return prevItems.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
            return [...prevItems, { ...product, quantity: 1 }];
        });
    };

    const removeFromCart = (productId) => {
        setCartItems(prevItems => {
            const existingItem = prevItems.find(item => item.id === productId);
            if (existingItem && existingItem.quantity > 1) {
                return prevItems.map(item =>
                    item.id === productId
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                );
            }
            return prevItems.filter(item => item.id !== productId);
        });
    };

    const clearCart = () => {
        setCartItems([]);
        localStorage.removeItem('cartItems'); // Limpiar también el localStorage
    };

    return (
        <CarShop.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
            {children}
        </CarShop.Provider>
    );
}

export function useCarShop() {
    return useContext(CarShop);
}