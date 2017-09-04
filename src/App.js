import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Login from './Login';
import NotFound from './NotFound';
import restricted from './Restricted';

const App = () => (
  <Router>
    <div>
      <header>
        <Link to="/about">About</Link>
        {' '}
        <Link to="/">Login</Link>
        { ' ' }
        <strong>react-router-dom-example</strong>
      </header>
      <main>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/home" component={restricted(Home)} />
          <Route path="/about" component={About} />
          <Route component={NotFound} />
        </Switch>
      </main>
    </div>
  </Router>
);

export default App;
