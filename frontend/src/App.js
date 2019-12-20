import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Blogs from './containers/Blogs';
import NavBar from './components/NavBar/NavBar';
import './App.css';

const App = () => (
  <div className="App">
      <NavBar />
      <Switch>
        <Route path="/"  component={Blogs} />
      </Switch>
  </div>
);

export default App;