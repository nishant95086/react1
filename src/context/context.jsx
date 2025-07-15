import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (e) => {
    if (!cart.find((c) => c.id === e.id)) {
      setCart([...cart, {...e, quantity:1 }]);
    }
    else{
      setCart(cart.map((c) => c.id == e.id ? {...c, quantity : c.quantity+1} : c));
    }
  };
  const removeCart = (id) => {
    setCart(cart.filter((c) => c.id !== id));
  };

  const addItem = (id) => {
    setCart(cart.map((e) => (e.id == id ? {...e, quantity: e.quantity+1} : e)));
  }

  const removeItem = (id) => {
    setCart(cart.map((e) => (e.id == id ? {...e, quantity: e.quantity > 1 ? e.quantity-1 : 1}: e )));
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, removeCart, addItem, removeItem}}>
      {children}
    </CartContext.Provider>
  );
};
