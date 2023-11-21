import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Logout from './path-to-logout-component';
import Home from './path-to-home-component';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/logout" component={Logout} />
      </Switch>
    </Router>
  );
};

export default App;
