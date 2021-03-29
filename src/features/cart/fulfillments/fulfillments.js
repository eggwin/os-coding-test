import React, { useState } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { productsInCartList } from '../../products/productsSlice';
import styles from './fulfillments.module.css';

export function Fulfillments() {
  const cartProducts = useSelector(productsInCartList);
  const brands = [];
  const [update, setUpdate] = useState(0);

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
  let products = [];

  const fulfillmentGroups = fulfillmentsByBrandSorted.map(fulfillmentGroup => {
    const quantity = fulfillmentGroup[1].reduce((acc, product) => {
      if (products.includes(product.id)) {
        acc++;
      } else {
        products.push(product.id);
      }
      return acc;
    }, 1);

    products = [];

    const total = fulfillmentGroup[1].reduce((acc, product) => {
      if (products.includes(product.id)) {
        acc += product.price;
      } else {
        products.push(product.id);
        acc = product.price;
      }
      return acc;
    }, 0);

    products = [];

    /**
     * Remove duplicates
     * TODO: Refactor using new Set() to remove duplicates
     */
    const fulfillmentGroupsFiltered = fulfillmentGroup[1].filter((product, index) => {
      return fulfillmentGroup[1].indexOf(product) === index;
    });

    const fulfillmentGroupRow = fulfillmentGroupsFiltered.map(fulfillmentRow => {
      return (
        <Container>
          <Row>
            <Col>
              <img src={fulfillmentRow.image} width="50%" />
            </Col>
            <Col>
              <Row>
                <Col>
                  {fulfillmentRow.name}
                </Col>
              </Row>
              <Row>
                <Col>
                  {fulfillmentRow.description}
                </Col>
                <Col>
                  {quantity}
                </Col>
                <Col>
                  ${total.toFixed(2)}
                </Col>
              </Row>
              <Row>
                <Col>
                  ${fulfillmentRow.price.toFixed(2)}
                </Col>
              </Row>
              <Row>
                <Col>
                  <Button variant="outline-dark">Delete</Button>
                </Col>
                <Col>
                  <Button variant="outline-dark">Save for Later</Button>
                </Col>
                <Col>
                  <Button variant="outline-dark">Update</Button>
                  <input type="text" value={update} onChange={(e) => setUpdate(e.target.value)} />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      )
    });

    return (
      <Container className={styles.fulfillmentGroupContainer} fluid>
        <Row>
          <Col>
            <span className={styles.square}></span>
          </Col>
          <Col>
            Fulfilled by
          </Col>
          <Col>
            {fulfillmentGroup[0]}
            ({fulfillmentGroup[1].length})
          </Col>
          <Col>
            Pk
          </Col>
          <Col>
            Total
          </Col>
        </Row>
        {fulfillmentGroupRow}
      </Container>
    )
  });

  return (
    <Container>
      <Row>
        <Col>
          {fulfillmentGroups.length >= 1 && fulfillmentGroups}
        </Col>
      </Row>
      {!fulfillmentGroups.length && 
      (<Row>
        <Col>
          There are no items in your cart
        </Col>
      </Row>)}
    </Container>
  )
}
