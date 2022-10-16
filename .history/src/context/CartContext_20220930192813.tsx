import { createContext } from "react";
import { Coffee } from "../components/CoffeCards";

//terceiro 
export interface CartItensType extends Coffee {
  quantity: number;
}

//segundo criei a tipagem que o contexto iria receber
interface CartContextType{
  cartItens: CartItensType[]
}

//primeiro criem o contexto
export const CartContext = createContext({} as CartContextType);