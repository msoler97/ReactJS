import { BsCart2 } from 'react-icons/bs'
import { useCartContext } from '../../context/CartContext'

let cartStyles = {
    color: 'white',
    width: '8%'
}

let iconStyles = {
    fontSize: '32'
}

export default function CartIcon({count}){
    const {totalProducts} = useCartContext()
    return (
        <div style={cartStyles}>
            <BsCart2 style={iconStyles}/>
            <span>{totalProducts() || ""}</span>
        </div>
    )
        
}