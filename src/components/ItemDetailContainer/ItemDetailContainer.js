import {useState, useEffect} from "react";
import ItemDetail from "../ItemDetail/ItemDetail";

const product = {id: "1", title: "Producto 1" , stock: "5", price: "$800", image: "https://i.postimg.cc/5yktGD3t/producto1.jpg"}

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
        <div>
    <ItemDetail data={data} />
        </div>
    )    
}