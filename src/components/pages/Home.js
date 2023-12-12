import React, { useState }from 'react';
import SideNav from '../SideNav';
import Header from '../Header';
import "./Home.css"

function Home() {
  const [isOpen, setOpen] = useState(true)
  return (
    <>
      <SideNav name="Youdas Yessad"/>
      <div className={`home ${isOpen ? 'open' : 'closed'}`}>
        <Header />
      </div>
      
    </>
  );
}

export default Home;
