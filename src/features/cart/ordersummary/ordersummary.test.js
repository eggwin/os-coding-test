import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../../app/store';
import { OrderSummary } from './ordersummary';

describe('Order Summary Component', () => {
  it('should render', () => {
    const { getAllByText } = render(
      <Provider store={store}>
        <OrderSummary />
      </Provider>
    );
    expect(getAllByText(/subtotal/i).length).toEqual(2);
  });
});
