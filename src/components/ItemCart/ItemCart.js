import {Card, Button} from 'react-bootstrap'
import { useCartContext } from '../../context/CartContext'

export default function ItemCart({product}) {
    const {removeFromCart} = useCartContext()
    return(
    <Card style={{ width: '18rem', border: '2px solid #ccc'}}>
  <Card.Img variant="top" src={product.image} />
  <Card.Body>
    <Card.Title>{product.title}</Card.Title>
    <Card.Text> Cantidad: {product.quantity}</Card.Text>
    <Card.Text> Precio unidad: ${product.price}</Card.Text>
    <Card.Text> Subtotal: ${product.quantity * product.price}</Card.Text>
    <Button variant="dark" onClick={()=> removeFromCart(product.id)}>Eliminar</Button>
  </Card.Body>
</Card>
    )
}