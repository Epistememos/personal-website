import React, {useState} from 'react'
import { Link } from 'react-router-dom'


function Navbar() {
  const [click, setClick] = useState(false);
  //reverses the value of useState
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className='navbar'>
          <div className='navbar-container'>
            <Link to='/' className="navbar-logo">
              YY <i className='fab fa-typo3' />
            </Link>
            <div className='menu-icon' onClick={handleClick}>                
              <i className={click ? 'fas fa-times': 'fas fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/simplified' className='nav-links' onClick={closeMobileMenu}>
                  Simplified
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/visual' className='nav-links' onClick={closeMobileMenu}>
                  Visual
                </Link>
              </li>
            </ul>
          </div>
      </nav>
    </>
  )
}

export default Navbar
