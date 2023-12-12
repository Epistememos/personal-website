import React, { useState } from "react";
import "./SideNav.css";
import Button from "./Button";
import { Spin as Hamburger } from 'hamburger-react';

const SideNav = (props) => {
    const [isOpen, setOpen] = useState(true)


    return (
        <div className={`sidenav-container ${isOpen ? '' : 'closed'}`}>
            <Hamburger toggled={isOpen} toggle={() => setOpen(!isOpen)} color="#F4F2EC" />
            {isOpen && (
            <div className="sidenav-open">
            <img src="/assets/img-logo.jpg" alt="Pilot"/>
            <h1>{props.name}</h1>
            <Button name="Resume" path="/assets/Resume.pdf"/>
            <a href="/simplified">Simplified</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#involvements">Involvement</a>
            <a href="#blog">Blog</a>
            <a href="#contact">Contact</a> 
            </div>
             )}
        </div>
    );
};
export default SideNav;