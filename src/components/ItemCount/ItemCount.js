import React from "react"

export default function ItemCount(){
    const[count, setCount] = React.useState('0')

    const handleCount = ()=> {
        if(count < 10){
            setCount (count + 1)
        }
    }
    const handleRest = ()=> {
        if(count > 0){
            setCount (count - 1)
        }
    }
    return (
        <div>
            <input type="button" value="-" onClick={handleRest} />
            {count}
            <input type="button" value="+" onClick={handleCount} />
        </div>
    )
}