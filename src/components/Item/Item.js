import {Card, Button} from 'react-bootstrap'

export default function Item({product}) {
    return(
    <Card style={{ width: '18rem', border: '2px solid #ccc'}}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>{product.title}</Card.Title>
    <Card.Text> Precio: {product.price}
    </Card.Text>
    <Button variant="primary">Detalles</Button>
  </Card.Body>
</Card>
    )
}