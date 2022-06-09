import {useState, useEffect} from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { products } from "../../data/Productos";

export default function ItemDetailContainer({productId}){
    const [data, setData] = useState ({})

    // useEffect (()=> {
    //     const getData = new Promise (resolve => {
    //         setTimeout(() => {
    //             resolve(products)
    //         }, 2000)
    //     })
    //     getData.then(res => setData(res))
    // }, [])
    
    useEffect (()=> {
        // setData(products.find(data => data.id === productId))
        const getData = new Promise (resolve => {
            setTimeout(() => {
                resolve(products.find(data => data.id))
            }, 2000)
        })
        getData.then(res => setData(res) === productId)
    }, [productId])
    

    return(
        <div>
    <ItemDetail data={data} />
        </div>
    )    
}