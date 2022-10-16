import { createContext } from "react";

export cons

interface CarteContextType{
  cartItens: CartItensType[]
}

export const CartContext = createContext({} as CartContextType);