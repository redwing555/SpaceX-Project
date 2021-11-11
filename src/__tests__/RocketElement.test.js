import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import RocketElement from '../components/RocketElement';

describe('Rocket Element Tests', () => {
  test('Check if Component Renders in DOM', () => {
    render(
      <Provider store={store}>
        <RocketElement />
      </Provider>,
    );
    expect(screen.queryByText(/Missions/)).toBeNull();
    expect(screen.queryByText(/Description/)).toBeNull();
  });
  // it('renders correctly', () => {
  //   const tree = renderer
  //     .create(
  //       <Router>
  //         <NavigationLinks />
  //       </Router>,
  //     )
  //     .toJSON();
  //   expect(tree).toMatchSnapshot();
  // });
});
