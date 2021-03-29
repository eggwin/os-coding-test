import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Card, Container, Row, Col } from 'react-bootstrap';
import {
  retrieveProducts,
  productsList,
  addToCart,
  productsInCartList,
} from './productsSlice';
import styles from './products.module.css';

export function Products() {
  const products = useSelector(productsList);
  const productsIncart = useSelector(productsInCartList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(retrieveProducts());
  }, []);

  const productRows = products.map(product => {
    const productQuantity = productsIncart.filter(productInCart => productInCart.id === product.id).length;
    return <div className={styles.productsRow} key={product.id}>
      <Card style={{ width: '24rem', border: 'none' }} className="text-center">
        <Container>
          <Card.Img variant="top" src={product.image} style={{ width: "212px", height: "318px" }} />
        </Container>
        <Card.Body>
          <Container className={styles.quantityContainer}>
            <Row>
              <Col xl={2} lg={2} md={2} sm={1} xs={1} className={styles.quantity}>{productQuantity}</Col>
              <Col xl={2} lg={2} md={2} sm={1} xs={1} className={styles.plusSign} onClick={() => dispatch(addToCart(product))}>
                <img alt="plus sign" src="/plus-flat.png" width="50px" />
              </Col>
            </Row>
          </Container>
          <Card.Title className={styles.cardTitleTop}>{product.brand_name}</Card.Title>
          <Card.Text className={styles.cardTitleBottom}>{product.name}</Card.Text>
          <Card.Text>{`$${product.price}`}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  });

  return (
    <div>
      <div className={styles.totalCartContainer}>
        Total: <span className={styles.totalCart}>{products.length}</span>
      </div>
      <div className={styles.productsRow}>
        {productRows}
      </div>
    </div>
  );
}
