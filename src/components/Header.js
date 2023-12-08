<<<<<<< HEAD
import React from 'react'

function Header() {
  return (
    <div>
      <h1>Youdas Yessad</h1>
      
=======
import React, {useEffect, useRef} from 'react';
import './Header.css';

function Header() {
    const specificHeaderRef = useRef(null);

useEffect(() => {
    const handleScroll = () => {
        if (specificHeaderRef.current) {
        const current = window.scrollY;
        specificHeaderRef.current.style.fontSize = `clamp(5em, ${current}px, 10em)`;
        }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
    }, []);
  return (
    <div className='header'>
        <h1 ref={specificHeaderRef}>Youdas Yessad</h1>
>>>>>>> ae767dbf834328def9cfdbaa44b8b0f24eeaada4
    </div>
  )
}

<<<<<<< HEAD
export default Header
=======
export default Header;

>>>>>>> ae767dbf834328def9cfdbaa44b8b0f24eeaada4
