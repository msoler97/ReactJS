//import ItemCount from "../ItemCount/ItemCount.js"
import ItemList from "../ItemList/ItemList.js"
import {products} from "../../data/Productos.js"

let containerStyles={
    textAlign: 'center',
    fontFamily: 'sans-serif',
    fontWeight: 'bolder',
    borderColor: 'black',
    borderStyle: 'double',
    backgroundColor: 'grey',
    fontSize: 'larger'
}    

export default function ItemListContainer({greeting}) {
    const task = new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(products);
        }, 2000)
    })
    task.then((result) => {
        console.log(result)
      })
    return (
        <div style={containerStyles}>
            {/* {greeting} */}
            <ItemList/>
            {/* <ItemCount/> */}
        </div>
    )
}