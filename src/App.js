import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import NotFound from './NotFound';
import restricted from './Protected';

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/compose" component={restricted(Home)} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
);

export default App;
