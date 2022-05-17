import {useState, useEffect} from "react";
import ItemDetail from "../ItemDetail/ItemDetail";

const product = {id: "1", title: "Producto 1" , stock: "5", price: "$800", image: "../../assets/producto1.jpeg" }

export default function ItemDetailContainer(){
    const [data, setData] = useState ({})

    useEffect (()=> {
        const getData = new Promise (resolve => {
            setTimeout(() => {
                resolve(product)
            }, 2000)
        })
        getData.then(res => setData(res))
    }, [])

    return(
    <ItemDetail data={data} />
    )    
}