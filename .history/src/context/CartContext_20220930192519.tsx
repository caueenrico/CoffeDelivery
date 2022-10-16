import { createContext } from "react";

interface CarteContextType{
  cartItens: Cart
}

export const CartContext = createContext({} as CartContextType);