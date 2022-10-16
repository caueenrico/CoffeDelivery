import { createContext, ReactNode, useState } from "react";
import { Coffee } from "../components/CoffeCards";

//terceiro extendi puxando o itens do Coffe adicionando o quantity
export interface CartItens extends Coffee {
  quantity: number;
}

//segundo criei a tipagem que o contexto iria receber
interface CartContextType{
  cartItens: CartItens[]
  addCoffeeToCart: (coffe: CartItens) => void
}

//primeiro criem o contexto
export const CartContext = createContext({} as CartContextType);

interface CartProviderProps{
  children: ReactNode;
}

export function CartContextProvider({children}: CartProviderProps){
  const [cartItens, setCartItens] = useState<CartItens[]>([]);

  function addCoffeeToCart(coffe: CartItens){
    if(cartItens.find(item => item.id === coffe.id)){
      setCartItens(cartItens.map(item => item.id === coffe.id ? {
        ...item,
        quantity: item.quantity + 1
      } : item))
    }else{ setCartItens([ ...car ,coffe])}
  }

  return (
    <CartContext.Provider value={{cartItens , addCoffeeToCart }}>
      {children}
    </CartContext.Provider>
  )
}