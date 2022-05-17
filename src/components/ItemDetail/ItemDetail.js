import React from "react";

export default function ItemDetail({data}){
    <div>
        <img src={data.image}/>
        <h1> {data.title} </h1>
        <p> {`Precio: ${data.price}`} </p>
    </div>
}