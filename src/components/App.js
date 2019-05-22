import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navigation from './Navigation';
import Home from './Home';
import BlogAsync from './BlogAsync';

const App = () => {
  return (
    <div className="app">
      <Navigation />
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/blog' component={BlogAsync}/>
      </Switch>
    </div>
  );
};

export default App;
