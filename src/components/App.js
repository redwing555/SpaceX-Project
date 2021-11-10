import React, { useEffect } from 'react';
import {
  BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Navbar from './Navbar';
import RocketElement from './RocketElement';
import MissionElement from './MissionElement';
import ProfileElement from './ProfileElement';
import { loadRocketsData } from '../redux/rockets/rockets';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadRocketsData());
  }, [dispatch]);

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <RocketElement />
        </Route>
        <Route path="/missions">
          <MissionElement />
        </Route>
        <Route path="/profile">
          <ProfileElement />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
