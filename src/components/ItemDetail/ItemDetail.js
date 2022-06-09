import React from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount.js"
import { useCartContext } from "../../context/CartContext.js";
import { useState } from "react";

export default function ItemDetail({data}){

    const [goToCart, setGoToCart] = useState (false)
    const {addToCart} = useCartContext() 
    const onAdd = (quantity) => {
        setGoToCart(true)
        addToCart(data, quantity)
    }

    return(
        <div>
            <img src={data.image} alt={data.title}/>
            <h1> {data.title} </h1>
            <p> {`Precio: ${data.price}`} </p>
            {
                goToCart
                ? <Link to={'/cart'}>Finalizar compra</Link>
                :<ItemCount initial={1} stock={data.stock} onAdd={onAdd}/>
            }       

        </div>
    )
}