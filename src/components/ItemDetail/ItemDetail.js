import React from "react";

export default function ItemDetail({data}){
    return(
        <div>
            <img src={data.image} alt={data.title}/>
            <h1> {data.title} </h1>
            <p> {`Precio: ${data.price}`} </p>
        </div>
    )
}