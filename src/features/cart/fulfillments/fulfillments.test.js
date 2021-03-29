import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../../app/store';
import { Fulfillments } from './fulfillments';

describe('Fulfillments Component', () => {
  it('should render', () => {
    const { getByText } = render(
      <Provider store={store}>
        <Fulfillments />
      </Provider>
    );
    expect(getByText(/There are no items in your cart/i)).toBeInTheDocument();
  });
});
