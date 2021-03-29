import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from './app/store';
import App from './App';

describe('renders the app', () => {
  it('should render without issues', () => {
    const { getByText } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(getByText(/cart/i)).toBeInTheDocument();
    expect(getByText(/products/i)).toBeInTheDocument();
  })
});
