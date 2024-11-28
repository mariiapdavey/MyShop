import React from 'react'
import products from '../products'
import Product from '../components/Product'
import Event from '../components/Event'
import {Col, Row} from 'react-bootstrap'

const HomeScreen = () => {
  return (
    <>
        <h1> Our Services </h1>
        <Row>
            {products.services.map((p) => (
                <Col key={p._id} sm={12} md={6} lg={4} xl={3}>
                    <Product product={p} />
                </Col>
            ))}
        </Row>
        <h2> Themed Events </h2>
        <Row>
            {products.events.map((e) => (
                <Col key={e._id} sm={12} md={6} lg={4} xl={3}>
                    <Event event={e} />
                </Col>
            ))}
        </Row>
    </>
  )
}

export default HomeScreen
