import { createContext } from "react";

export interface CartItensType extends <Coffee></Coffee> {

}

interface CarteContextType{
  cartItens: CartItensType[]
}

export const CartContext = createContext({} as CartContextType);