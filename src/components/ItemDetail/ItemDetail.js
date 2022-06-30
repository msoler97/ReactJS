import React from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount.js"
import { useCartContext } from "../../context/CartContext.js";
import { useState } from "react";
import { Button } from "react-bootstrap";

export default function ItemDetail({data}){

    const [goToCart, setGoToCart] = useState (false)
    const {addToCart} = useCartContext() 
    const onAdd = (quantity) => {
        setGoToCart(true)
        addToCart(data, quantity)
    }

    return(
        <div className="itemDetail">
            <div>
                <img src={data.image} alt={data.title}/>
                <h2> {data.title} </h2>
                <p> {`Precio: ${data.price}`} </p>
                <p> {data.details} </p>
            </div>
            {
                goToCart
                ? <Button variant="dark"> <Link to={'/cart'} className='goToCartButton'>Finalizar compra</Link> </Button>
                :<ItemCount initial={1} stock={data.stock} onAdd={onAdd}/>
            }       

        </div>
    )
}