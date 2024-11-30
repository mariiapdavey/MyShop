import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Event = ({event}) => {
  return (
    <Card className ='my-5 p-3 rounded'>
      <Link to={`/service/${event._id}`}>
        <Card.Img src={event.image} variant ='top' />
        </Link>
        <Card.Body>
          <Link to={`/service/${event._id}`}>
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