import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Simplified from './components/pages/Simplified';
import Projects from './components/pages/Projects';
import Involvements from './components/pages/Involvements';
import Blog from './components/pages/Blog';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/simplified" element={<Simplified />}/>
      <Route path="/projects" element={<Projects />}/>
      <Route path="/involvements" element={<Involvements />}/>
      <Route path="/blog" element={<Blog />}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
