import ItemCount from "../ItemCount/ItemCount.js"
import ItemList from "../ItemList/ItemList.js"
import {products} from "../../data/Productos.js"
import {useState, useEffect} from "react"

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
    const [data, setData] = useState([])

    useEffect (()=> {
        const getData = new Promise (resolve => {
            setTimeout(() => {
                resolve(products)
            }, 2000)
        })
        getData.then(res => setData(res))
    }, [])

    const onAdd = (quantity) => {
        console.log(`Agregaste ${quantity} items al carrito`)
    }

    return (
        <div style={containerStyles}>
            {greeting}
            <ItemCount initial={1} stock={data.stock} onAdd={onAdd}/> 
            <ItemList data={data}/>
        </div>
    )
}