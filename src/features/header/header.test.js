import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../app/store';
import { Header } from './header';

describe('Header Component', () => {
  it('should render', () => {
    const { getByAltText } = render(
      <Provider store={store}>
        <Header />
      </Provider>
    );
    expect(getByAltText(/logo/i)).toBeInTheDocument();
  });
});
