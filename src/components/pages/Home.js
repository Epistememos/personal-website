import React, { useState }from 'react';
import SideNav from '../SideNav';
import Header from '../Header';
import "./Home.css";


function Home() {
  const [isNavOpen, setNavOpen] = useState(true);

  const handleNavToggle = (isOpen) => {setNavOpen(isOpen); };

  return (
    <>
      <SideNav name="Youdas Yessad" handleNavToggle={handleNavToggle} />
      <div className={`home ${isNavOpen ? '' : 'closed'}`}>
        <Header />
      </div>
      
    </>
  );
}

export default Home;
