import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Fulfillments } from './fulfillments/fulfillments';
import { OrderSummary } from './ordersummary/ordersummary';
import styles from './cart.module.css';

export function Cart() {
  return (
    <Container className={styles.cartContainer}>
      <Row>
        <Col>
          <Fulfillments />
        </Col>
        <Col>
          <OrderSummary />
        </Col>
      </Row>
    </Container>
  )
}
