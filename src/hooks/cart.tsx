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
}

const CartContext = createContext<CartContextType>({
  cart: [],
  setCart: () => {},
});


export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<Movie[]>([]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const { cart, setCart } = useContext(CartContext);
  return { cart, addToCart: setCart };
};
