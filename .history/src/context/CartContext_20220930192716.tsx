import { createContext } from "react";
import { Coffee } from "../components/CoffeCards";

export interface CartItensType extends Coffee {
  quantity: number;
}

interface CartContextType{
  cartItens: CartItensType[]
}

export const CartContext = createContext({} as CartContextType);