import React from 'react';
import {
  BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';
import Navbar from './Navbar';
import RocketElement from './RocketElement';
import MissionElement from './MissionElement';
import ProfileElement from './ProfileElement';

const App = () => (
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

export default App;
