import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/simplified" element={<Simplified />} />
        <Route path="/projects" element={< Projects/>} />
        <Route path="/involvements" element={< Involvements/>} />
        <Route path="/blog" element={< Blog/>} />
        <Route path="/articles/:id" element={< Article/>} />
        </Routes>
    </HashRouter>
  );
}

export default App;
