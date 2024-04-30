import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((currentItems) => {
      const itemIndex = currentItems.findIndex((item) => item.id === product.id);
      if (itemIndex > -1) {
        return currentItems.map((item, index) => {
          if (index === itemIndex) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      } else {
        return [...currentItems, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCartItems((currentItems) => {
      const existingItem = currentItems.find((item) => item.id === productId);
      if (existingItem && existingItem.quantity > 1) {
        return currentItems.map((item) =>
          item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
        );
      } else {
        return currentItems.filter((item) => item.id !== productId);
      }
    });
  };
  
  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart   }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
