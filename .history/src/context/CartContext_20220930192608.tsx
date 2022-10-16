import { createContext } from "react";

export interface CartItensType extends Coff

interface CarteContextType{
  cartItens: CartItensType[]
}

export const CartContext = createContext({} as CartContextType);