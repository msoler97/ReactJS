import Item from "../Item/Item.js"
import { products } from "../../data/Productos.js"

export default function ItemList(){
    return(
        <div>
            {products.map((product) => (
                    <div key={product.id}> 
                        <Item product={product}/>
                    </div>                
                    )
            )}
        </div>
    )
}