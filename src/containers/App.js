import React, {component} from 'react';
import ModuloDoc from '../containers/ModuloDoc';
import Ex from '../containers/Ex';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import moduleDoc from '../containers/ModuloDoc';

const App = () => (
  <Router>
    <Switch>
      <Route exact strict path="/ModuloDoc" component={moduleDoc} />
      <Route exact strict path="/Ex" component={Ex} />
    </Switch>
  </Router>
);

export default App;