import React from 'react';
import { useSelector } from 'react-redux';
import { Header } from '../header/header';
import { Navbar } from '../navbar/navbar';
import { Products } from '../products/products';
import { Cart } from '../cart/cart';
import { page } from './../navbar/navbarSlice';

export function Main() {
  const productsOrCart = useSelector(page);
  return (
    <div className="App">
      <Header />
      <Navbar />
      {productsOrCart === 'products' && <Products />}
      {productsOrCart === 'cart' && <Cart />}
    </div>
  );
}
