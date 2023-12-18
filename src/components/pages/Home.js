import React, { useState }from 'react';
import SideNav from '../SideNav';
import Header from '../Header';
import "./Home.css";
import Showcase from '../Showcase';


function Home() {
  const [isNavOpen, setNavOpen] = useState(true);

  const handleNavToggle = (isOpen) => {setNavOpen(isOpen); };

  return (
    <>
      <SideNav name="Youdas Yessad" handleNavToggle={handleNavToggle} />
      <div className={`home ${isNavOpen ? '' : 'closed'}`}>
        <Header />
        <Showcase name="Projects" id="projects" />
      </div>
      
    </>
  );
}

export default Home;
