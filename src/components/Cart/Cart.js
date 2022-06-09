import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import ItemCart from "../ItemCart/ItemCart";

export default function Cart () {
    const {cart, totalPrice} = useCartContext()

    if (cart.length === 0){
        return(
        <>
            <p> El carrito está vacío. </p>
            <Link to='/products'> Ir a comprar </Link>
        </>    
            )
    }
    return(
        <>
        {cart.map(product => <ItemCart key={product.id} product={product}/>)}
        <p> Total: ${totalPrice}</p>
        </>
    )
}