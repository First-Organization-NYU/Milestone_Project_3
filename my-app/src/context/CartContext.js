import React, {createContext, useState} from 'react'
import constate from "constate"

export const CartContext = createContext()

export default function CartProvider(props){
    const [cart, setCart] = useState([])
    console.log('cart:', cart)
    console.log('setCart', setCart)

    return(
        <CartContext.Provider value={[cart, setCart]}>
            {props.children}
        </CartContext.Provider>
    )

}

