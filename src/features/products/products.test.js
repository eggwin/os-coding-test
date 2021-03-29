import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../app/store';
import { Products } from './products';
import { retrieveProducts, loadProducts } from './productsSlice';

describe('Products Component', () => {
  beforeEach(async () => {
    const mockProducts = [
      {
        "id": "100001",
        "price": 120.4,
        "name": "BA-00001",
        "colors": [
          "red",
          "green"
        ],
        "image": "https://os-coding-test.s3-us-west-1.amazonaws.com/images/202002_062539b0-c9b3-11e9-9e97-002590aaee66.jpg",
        "description": "This product is 00001 and made in United States.",
        "brand_name": "Brand A"
      }
    ];
    await store.dispatch(loadProducts(mockProducts));
  })
  it('should render', () => {
    const { getByText } = render(
      <Provider store={store}>
        <Products />
      </Provider>
    );
    expect(getByText(/total/i)).toBeInTheDocument();
  });
  it('should render one product', () => {
    const { getByText } = render(
      <Provider store={store}>
        <Products />
      </Provider>
    );
    expect(getByText(/\$120.4/i)).toBeInTheDocument();
    expect(getByText(/BA-00001/i)).toBeInTheDocument();
    expect(getByText(/Brand A/i)).toBeInTheDocument();
  })
});
