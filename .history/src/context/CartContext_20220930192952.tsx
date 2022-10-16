import { createContext } from "react";
import { Coffee } from "../components/CoffeCards";

//terceiro extendi puxando 
export interface CartItens extends Coffee {
  quantity: number;
}

//segundo criei a tipagem que o contexto iria receber
interface CartContextType{
  cartItens: CartItens[]
}

//primeiro criem o contexto
export const CartContext = createContext({} as CartContextType);