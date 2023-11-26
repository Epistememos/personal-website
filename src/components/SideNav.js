import React from "react";
import "./SideNav.css";

const SideNav = (props) => {
    return (
        <div className="sidenav-container">
            <img src="/assets/img-logo.jpg" alt="Pilot"/>
            <h1>{props.name}</h1>
            <a href="/simplified">Simplified</a>
            <a href="#section">About</a>
            <a href="#section">Projects</a>
            <a href="#section">Involvement</a>
            <a href="#blog">Blog</a>
            <a href="#section">Contact</a> 
        </div>
    );
};
export default SideNav;