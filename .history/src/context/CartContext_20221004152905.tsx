import produce from "immer";
import { createContext, ReactNode, useState } from "react";
import { Coffee } from "../components/CoffeCards";

//terceiro extendi puxando o itens do Coffe adicionando o quantity
export interface CartItens extends Coffee {
  quantity: number;
}

//segundo criei a tipagem que o contexto iria receber
interface CartContextType{
  cartItens: CartItens[]
  quantityAddItens: number
  addCoffeeToCart: (coffe: CartItens) => void
  changeCartItemQuantity: (cartItemId: number, type: ) => void
}

//primeiro criem o contexto
export const CartContext = createContext({} as CartContextType);

interface CartProviderProps{
  children: ReactNode;
}

export function CartContextProvider({children}: CartProviderProps){
  const [cartItens, setCartItens] = useState<CartItens[]>([]);
  const quantityAddItens = cartItens.length;


  function addCoffeeToCart(coffe: CartItens){
    const coffeAlreadyinExistInCart = cartItens.findIndex(
      (item) => item.id === coffe.id
    )
    const newCart = produce(cartItens, (draft) => {
      if(coffeAlreadyinExistInCart >= 0){
        draft[coffeAlreadyinExistInCart].quantity += coffe.quantity
      }else{
        draft.push(coffe)
      }
    })
    setCartItens(newCart)
  }

  function changeCartItemQuantity(cartItemId: number,type: 'increment' | 'decrement'){
    const newCart = produce(cartItens, (draft) => {
      const coffeExistsInCart = cartItens.findIndex(cartItens => cartItens.id === cartItemId)

      if(coffeExistsInCart >= 0){
        const item = draft[coffeExistsInCart]
        draft[coffeExistsInCart].quantity = type === 'increment' ? item.quantity + 1 : item.quantity - 1
      }
    setCartItens(newCart)
  }

  function removeCoffeeToCart(coffe: CartItens){
  }


  console.log(cartItens)
  return (
    <CartContext.Provider value={{cartItens , quantityAddItens , addCoffeeToCart }}>
      {children}
    </CartContext.Provider>
  )
}