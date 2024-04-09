// SideNav component
import React, { useState } from 'react';
import './SideNav.css';
import Button from './Button';
import { Spin as Hamburger } from 'hamburger-react';
import { HashLink } from 'react-router-hash-link';
import Theme from './Theme';

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
        <Hamburger rounded toggled={isOpen} toggle={() => toggleNav(!isOpen)} color="var(--txt-color)" />
      </div>
      {isOpen && (
        <div className="sidenav-open">
          <img src="/assets/img-logo.jpg" alt="Logo" width="100px" />
          <h1>{props.name}</h1>
          <Button name="Resume" path="/assets/Resume.pdf" newWindow={true} />
          <a href="/#/simplified">Simplified</a>
          <HashLink to="/#about">About</HashLink>
          <HashLink to="/#projects">Projects</HashLink>
          <HashLink to="/#involvements">Involvements</HashLink>
          <HashLink to="/#blog">Blog</HashLink>
          <HashLink to="/#mtl-sightseeing">MTL Sightseeing</HashLink>
          <HashLink to="/#footer">Contact</HashLink>
          <Theme />
        </div>
      )}
    </div>
  );
};

export default SideNav;
