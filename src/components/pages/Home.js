import React, { useState }from 'react';
import SideNav from '../SideNav';
import Header from '../Header';
import Footer from '../Footer';
import "./Home.css";
import Showcase from '../Showcase';
import backendData from '../../backendData';


function Home() {
  const [isNavOpen, setNavOpen] = useState(true);

  const handleNavToggle = (isOpen) => {setNavOpen(isOpen); };
  
  return (
    <>
      <div className={`home ${isNavOpen ? '' : 'closed'}`}>
        <SideNav name="Youdas Yessad" handleNavToggle={handleNavToggle} />
        <div className="main-home">
          <Header />
          {backendData.map(section => (
              <Showcase section={section.section} data={section} />
          ))}
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Home;
