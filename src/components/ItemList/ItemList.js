import React from "react"
import Item from "../Item/Item.js"

export default function ItemList({data = []}){
    return(
            data.map(product => 
                        <Item key={product.id} info={product}/>               
                    )
    )
}