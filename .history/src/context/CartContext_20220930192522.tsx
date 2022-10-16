import { createContext } from "react";

interface CarteContextType{
  cartItens: Cartint
}

export const CartContext = createContext({} as CartContextType);