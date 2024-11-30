import React from 'react'
import { Card } from 'react-bootstrap'

const Event = ({event}) => {
  return (
    <Card className ='my-5 p-3 rounded'>
      <Link to={`/product/${event._id}`}>
        <Card.Img src={event.image} variant ='top' />
        </Link>
        <Card.Body>
          <Link to={`/product/${event._id}`}>
            <Card.Title as='div'>
                <strong>{event.name}</strong>
            </Card.Title>
          </Link> 
            <Card.Text as='h3'>
                ${event.price}
            </Card.Text>
        </Card.Body>

    </Card>
  )
}

export default Event