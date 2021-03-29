import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setPage } from './navbarSlice';
import { Container, Row, Col } from 'react-bootstrap';
import { page } from './navbarSlice';
import styles from './navbar.module.css';

export function Navbar() {
  const dispatch = useDispatch();
  const productsOrCart = useSelector(page);
  return (
    <Container className={styles.navbar} fluid>
      <Row>
        <Col>
          <a href="#" alt="Products" className={productsOrCart === 'products' ? styles.boldNav : ''} onClick={(e) => {
            e.preventDefault();
            dispatch(setPage("products"))
          }}>PRODUCTS</a>
        </Col>
        <Col>
          <a href="#" alt="Cart" className={productsOrCart === 'cart' ? styles.boldNav : ''} onClick={(e) => {
            e.preventDefault();
            dispatch(setPage("cart"))
          }}>Cart</a>
        </Col>
      </Row>
    </Container>
  )
}
