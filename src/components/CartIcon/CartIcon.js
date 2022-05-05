import { BsCart2 } from 'react-icons/bs'

let cartStyles = {
    color: 'white',
    width: '8%'
}

let iconStyles = {
    fontSize: '32'
}

export default function CartIcon({count}){
    return (
        <div style={cartStyles}>
            <BsCart2 style={iconStyles}/>
            {count}
        </div>
    )
        
}