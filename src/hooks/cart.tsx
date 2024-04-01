import { createContext, useContext, useState } from "react";

interface Movie {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartProviderProps {
  children: React.ReactNode; 
}

interface CartContextType {
  cart: Movie[];
  setCart: React.Dispatch<React.SetStateAction<Movie[]>>;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType>({
  cart: [],
  setCart: () => {},
  clearCart: () => {},
});


export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<Movie[]>([]);

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, setCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const { cart, setCart, clearCart } = useContext(CartContext);
  return { cart, addToCart: setCart, clearCart };
};
