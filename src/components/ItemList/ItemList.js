import Item from "../Item/Item.js"
import { products } from "../../data/Productos.js"

export default function ItemList(){
    return(
        <div>
            {products.map((product) => (
                    <div> 
                        <Item product={product} key={product.id}/>
                    </div>                
                    )
            )}
        </div>
    )
}