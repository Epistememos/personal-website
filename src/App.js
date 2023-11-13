import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Products from './components/pages/Products';
import Simplified from './components/pages/Simplified';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path = '/' exact component = {Home} />
        <Route path='/products' component={Products} />
        <Route path='/simplified' component={Simplified} /> 
      </Switch>
    </Router>
    </>
  );
}

export default App;
