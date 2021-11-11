import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import ProfileElement from '../components/ProfileElement';

describe('Navigation Links Tests', () => {
  test('Check if Component Renders in DOM', () => {
    render(
      <Provider store={store}>
        <ProfileElement />
      </Provider>,
    );
    expect(screen.queryByText(/Missions reservations/)).toBeTruthy();
  });
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <ProfileElement />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
