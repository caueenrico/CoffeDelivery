import { createContext } from "react";



interface CarteContextType{
  cartItens: CartItensType[]
}

export const CartContext = createContext({} as CartContextType);