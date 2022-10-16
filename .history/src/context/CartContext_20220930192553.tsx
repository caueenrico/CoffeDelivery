import { createContext } from "react";

export const CartItensType extends 

interface CarteContextType{
  cartItens: CartItensType[]
}

export const CartContext = createContext({} as CartContextType);