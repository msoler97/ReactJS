import {Card, Button} from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

export default function Item({info}) {
  const productRoute = `/details/${info.id}`
    return(
    <Card style={{ width: '18rem', border: '2px solid #ccc'}}>
  <Card.Img variant="top" src={info.image} />
  <Card.Body>
    <Card.Title>{info.title}</Card.Title>
    <Card.Text> Precio: {info.price}
    </Card.Text>
    <NavLink to= {productRoute}> <Button variant="primary">Detalles</Button> </NavLink>
  </Card.Body>
</Card>
    )
}