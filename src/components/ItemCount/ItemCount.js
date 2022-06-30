import React, {useState, useEffect} from "react"
import { Button } from "react-bootstrap"

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
            <Button variant="dark" onClick={handleRest}  disabled={count <= 1}> - </Button>
            {count}
            <Button variant="dark" onClick={handleCount}  disabled={count >= stock}> + </Button>
            <div>
                <Button variant="dark" onClick={() => onAdd(count)} disabled={stock <= 0}> Agregar al carrito. </Button>
            </div>
        </div>
    )
}