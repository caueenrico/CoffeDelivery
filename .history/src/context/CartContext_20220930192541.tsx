import { createContext } from "react";

export const 

interface CarteContextType{
  cartItens: CartItensType[]
}

export const CartContext = createContext({} as CartContextType);