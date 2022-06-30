import ItemList from "../ItemList/ItemList.js"
import {useState, useEffect} from "react"
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore"

export default function ItemListContainer({category}) {
    const [data, setData] = useState([])
    
    useEffect (()=> {
        const querydb = getFirestore()
        const queryCollection = collection(querydb, 'productos')
        
        if(category){
            category = parseInt(category)
            const queryFilter = query(queryCollection, where('category_id', '==', category))
            getDocs(queryFilter)
                .then(res => setData(res.docs.map(product => ({id: product.id, ...product.data()}))))
            }
            
            else{
            getDocs(queryCollection)
                .then(res => setData(res.docs.map(product => ({id: product.id, ...product.data()}))))
            }
     },[category])

    return (
        <div className='containerStyles'>
            <ItemList data={data}/>
        </div>
    )
}