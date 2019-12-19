import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Blogs from './containers/Blogs';
import BlogDetail from './containers/BlogDetail';

import './App.css';

const App = () => (
  <div className="App">
    <Switch>
      <Route path="/test" component={BlogDetail} />
      <Route path="/"  component={Blogs} />
    </Switch>
  </div>
);

export default App;