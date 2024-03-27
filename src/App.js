import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Simplified from './components/pages/Simplified';
import Projects from './components/pages/Projects';
import Involvements from './components/pages/Involvements';
import Blog from './components/pages/Blog';
import Article from './components/pages/Article';

function App() {
  return (
    <HashRouter>
        <Route exact path="/" component={Home} />
        <Route path="/simplified" component={Simplified} />
        <Route path="/projects" component={Projects} />
        <Route path="/involvements" component={Involvements} />
        <Route exact path="/blog" component={Blog} />
        <Route path="/blog/:id" component={Article} />
    </HashRouter>
  );
}

export default App;
