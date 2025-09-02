import { createContext, useState } from "react";

const ShoppingContext = createContext();

export function ShoppingProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  return (
    <ShoppingContext.Provider value={{ cartItems, setCartItems }}>
      {children}
    </ShoppingContext.Provider>
  );
}

export default ShoppingContext;
