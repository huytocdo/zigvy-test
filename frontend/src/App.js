import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Blogs from './containers/Blogs';
import BlogDetail from './containers/BlogDetail';
import NavBar from './components/NavBar/';
import './App.css';

const App = () => (
  <div className="App">
      <NavBar />
      <div className="container">
        <Switch>
          <Route path="/test"  component={BlogDetail} />
          <Route path="/"  component={Blogs} />
        </Switch>
      </div>
  </div>
);

export default App;