import { createContext } from "react";
import { Coffee } from "../components/CoffeCards";

export interface CartItensType extends Coffee {
  
}

interface CarteContextType{
  cartItens: CartItensType[]
}

export const CartContext = createContext({} as CartContextType);