import React, {useState, useEffect} from "react"

export default function ItemCount({ initial, stock, onAdd }) {
    const[count, setCount] = useState(parseInt(initial))

    const handleCount = ()=> {
        setCount (count + 1)
    }

    const handleRest = ()=>{
        setCount (count - 1)
    }

    useEffect( ()=> {
        setCount(parseInt(initial))
    }, [initial])

    return (
        <div>
            <input type="button" value="-" onClick={handleRest}  disabled={count <= 1}/>
            {count}
            <input type="button" value="+" onClick={handleCount}  disabled={count >= stock}/>
            <div>
                <input type="button" value="Agregar al carrito" onClick={() => onAdd(count)} disabled={stock <= 0}/>
            </div>
        </div>
    )
}