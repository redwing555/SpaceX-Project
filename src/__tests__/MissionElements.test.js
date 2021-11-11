import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import MissionElement from '../components/MissionElement';

describe('Mission Element Tests', () => {
  test('Check if Component Renders in DOM', () => {
    render(
      <Provider store={store}>
        <MissionElement />
      </Provider>,
    );
    expect(screen.queryByText(/Rocket/)).toBeNull();
    expect(screen.queryByText(/Mission/)).toBeTruthy();
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
