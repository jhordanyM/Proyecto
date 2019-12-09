import React, {component} from 'react';
import ModuloDoc from '../containers/ModuloDoc';
import Ex from '../containers/Ex';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import moduleDoc from '../containers/ModuloDoc';
import Login from '../containers/Login';

const App = () => (
  <Router>
    <Switch>
      <Route exact strict path="/ModuloDoc" component={moduleDoc} />
      <Route exact strict path="/Ex" component={Ex} />
      <Route exact strict path="/" component={Login} />
      <Route exact strict path="/Inicio" component={Login} />
    </Switch>
  </Router>
);

export default App;