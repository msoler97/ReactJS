import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import ItemCart from "../ItemCart/ItemCart";
import { Button } from "react-bootstrap";
import { addDoc, collection, getFirestore } from "firebase/firestore";

export default function Cart () {
    const {cart, totalPrice} = useCartContext()

    const order = {
        buyer: {
            name: 'Micaela',
            email: 'Micaela@gmail.com',
            phone: '2394987',
            address: 'user address'
        },
        items: cart.map(product => ({id: product.id, title: product.title, price: product.price, quantity: product.quantity})),
        total: totalPrice()
    }

    const handleClick = () => {
        const db = getFirestore()
        const ordersCollection = collection(db, 'orders')
        addDoc(ordersCollection, order)
        //.then(({id}) => console.log(id))
    }

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
        <div className="cartItem"> {cart.map(product => <ItemCart key={product.id} product={product}/>)} </div>
        <div className="buy">
        <p> Total: ${totalPrice()}</p>
        <Button variant="dark" onClick={handleClick}> Comprar </Button>
        </div>
        </>
    )
}