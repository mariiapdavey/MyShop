import React from 'react'
import { useParams, Link } from 'react-router-dom'
import {Row, Col, Image, Card, Button, ListGroup, ListGroupItem } from 'react-bootstrap'
import products from '../products'

const ServiceScreen = () => {
  const params = useParams();

  const product = 
    products.services.find((p) => p._id === params.id) ||
    products.events.find((e) => e._id === params.id);

    if (!product) {
      return <h2>Service not found</h2>;
    }


  return (
    <>
      <Link className='btn btn-light my-3' to='/'>
        Go Back
      </Link>
      <Row>
        <Col md={3}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>


        <Col md={6}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
            <ListGroup.Item>Duration: {product.duration}</ListGroup.Item>
            <ListGroupItem>{product.description}</ListGroupItem>
          </ListGroup>        
        </Col>


        <Col>
          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>${product.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col> Quantity </Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Button
                  className='btn-block'
                  type='button'
                >
                  Add To Cart                  
                </Button>
              </ListGroup.Item>

            </ListGroup>
          </Card>
        </Col>


      </Row>
    </>
  )
}

export default ServiceScreen