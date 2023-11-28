import React from "react";
import "./SideNav.css";

const SideNav = (props) => {
    return (
        <div className="sidenav-container">
            <img src="/assets/img-logo.jpg" alt="Pilot"/>
            <h1>{props.name}</h1>
            <a href="/simplified">Simplified</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#involvements">Involvement</a>
            <a href="#blog">Blog</a>
            <a href="#contact">Contact</a> 
        </div>
    );
};
export default SideNav;