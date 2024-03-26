// SideNav component
import React, { useState } from 'react';
import './SideNav.css';
import Button from './Button';
import { Spin as Hamburger } from 'hamburger-react';

const SideNav = (props) => {
  const [isOpen, setOpen] = useState(true);

  const toggleNav = (newState) => {
    setOpen(newState);

    if (props.handleNavToggle) {
      props.handleNavToggle(newState);
    }
  };

  return (
    <div className="sidenav-container">
      <div className="menu-icon">
        <Hamburger rounded toggled={isOpen} toggle={() => toggleNav(!isOpen)} color="#F4F2EC" />
      </div>
      {isOpen && (
        <div className="sidenav-open">
          <img src="/assets/img-logo.jpg" alt="Logo" width="100px" />
          <h1>{props.name}</h1>
          <Button name="Resume" path="/assets/Resume.pdf" />
          <a href="/simplified">Simplified</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#involvements">Involvement</a>
          <a href="#blog">Blog</a>
          <a href="#mtl-sightseeing">MTL Sightseeing</a>
          <a href="#contact">Contact</a>
        </div>
      )}
    </div>
  );
};

export default SideNav;
