import React, { useState } from "react";
import SideNav from "../SideNav";
import Header from "../Header";
import Footer from "../Footer";
import "./Home.css";
import Showcase from "../Showcase";
import backendData from "../../backendData";

function Home() {
  const [isNavOpen, setNavOpen] = useState(true);

  const handleNavToggle = (isOpen) => {
    setNavOpen(isOpen);
  };

  return (
    <>
      <div className={`home ${isNavOpen ? "" : "closed"}`}>
        <SideNav name="Youdas Yessad" handleNavToggle={handleNavToggle} />
        <div className="main-home">
          <Header />
          {backendData.map((section) => (
            <Showcase section={section.section} data={section} />
          ))}
          <div className="form" id="mtl-sightseeing">
          <iframe
            title="PFD-Form"
            src="https://docs.google.com/forms/d/e/1FAIpQLScAVSyr-jQ04YICdHNUWERF2vMjbtDZWkDrcgu7O6Eknu66tg/viewform?embedded=true"
            width="800"
            height="3100"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
          >
            Loading…
          </iframe>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Home;
