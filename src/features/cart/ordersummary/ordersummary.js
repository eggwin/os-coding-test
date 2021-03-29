import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { productsInCartList } from '../../products/productsSlice';
import styles from './ordersummary.module.css';

export function OrderSummary() {
  const cartProducts = useSelector(productsInCartList);
  const brands = [];
  const cartTotal = cartProducts.reduce((acc, product) => {
    acc += product.price;
    return acc;
  }, 0);

  const fulfillmentsByBrand = cartProducts.reduce((acc, product) => {
    if (!brands.includes(product.brand_name)) {
      brands.push(product.brand_name);
      brands.sort();
      acc[product.brand_name] = [product];
    } else {
      acc[product.brand_name].push(product);
    }
    return acc;
  }, {});

  const fulfillmentsByBrandSorted = Object.entries(fulfillmentsByBrand).sort();

  const orderSummaryFulfillments = fulfillmentsByBrandSorted.map(fulfillment => {
    const fulfillmentTotal = fulfillment[1].reduce((acc, product) => {
      acc += product.price;
      return acc;
    }, 0);
    return (
      <Row>
        <Col>
          {fulfillment[0]}
        </Col>
        <Col>
          {fulfillmentTotal.toFixed(2)}
        </Col>
      </Row>
    )
  });

  const SubtotalRow = (
    <Row>
      <Col>
        Subtotal
      </Col>
      <Col>
        ({cartProducts.length})
      </Col>
      <Col>
        ${cartTotal.toFixed(2)}
      </Col>
    </Row>
  );

  return (
    <Container className={styles.summaryContainer} fluid>
      <Row className={styles.topSummary}>
        <Col>
          <Container>
            {SubtotalRow}
            <Row>
              <Col>
                <Button variant="warning">Proceed to Checkout</Button>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
      <Row xl={2}>
        <Col>
          <Container>
            <Row>
              Order Summary
            </Row>
            {orderSummaryFulfillments}
            <Row>
              <hr />
            </Row>
            {SubtotalRow}
          </Container>
        </Col>
      </Row>
    </Container>
  )
}
