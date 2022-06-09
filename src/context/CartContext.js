import React, { useContext } from 'react'

const CartContext = React.createContext([])

export const useCartContext = () => useContext(CartContext) 

export const CartProvider = ({children}) => {
    const [cart, setCart] = React.useState([])

    const addToCart = (item, newQuantity) => {
        const newCart = cart.filter(product => product.id !== item.id)
        newCart.push({...item, quantity: newQuantity})
        setCart(newCart)
    }
    console.log('carrito:', cart)

    const removeFromCart = (id) => {setCart(cart.filter(product => product.id !== id))}

    const clearCart = () => { setCart([]) }

    return(
        <CartContext.Provider value= {{
            addToCart,
            removeFromCart,
            clearCart,
        }}>{children}</CartContext.Provider>
    )

}

