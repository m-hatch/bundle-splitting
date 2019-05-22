import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navigation from './Navigation';
import Home from './Home';
import Blog from './Blog';

const App = () => {
  return (
    <div className="app">
      <Navigation />
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/blog' component={Blog}/>
      </Switch>
    </div>
  );
};

export default App;
