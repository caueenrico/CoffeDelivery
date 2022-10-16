import { createContext } from "react";
import { Coffee } from "../components/CoffeCards";

export interface CartItensType extends Coffee {
  quantity: number;
}

//segundo criei a tipagem 
interface CartContextType{
  cartItens: CartItensType[]
}

//primeiro criem o contexto
export const CartContext = createContext({} as CartContextType);