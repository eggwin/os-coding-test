import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { productsInCartList } from '../products/productsSlice';
import { setPage } from './../navbar/navbarSlice';
import styles from './header.module.css';

export function Header() {
  const dispatch = useDispatch();
  const cartProducts = useSelector(productsInCartList);
  return (
    <div className={styles.header}>
      <img alt="logo" src="os_main_logo_v2.svg" width="350px" />
      <div className={styles.cartIconContainer}>
        <a className={styles.cartIcon} href="" onClick={(e) => {
          e.preventDefault();
          dispatch(setPage('cart'));
        }}>
          <img alt="cart icon" src="cart-outline.png" width="60px" />
          <span className={styles.cartQuantity}>{cartProducts.length}</span>
        </a>
      </div>
    </div>
  )
}
