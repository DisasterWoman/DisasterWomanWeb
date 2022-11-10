import React from 'react';
import './Navbar.scss';
import React, { useState } from React

function Navbar() {
  const [click, setClick] = useState(false);
  return (
    <>
    <nav className='navbar'>
    <div className="container-navbar">
    <img className='logo-main' src='/images/logo-black.png' width={135} height={35}></img>
    
    </div>
    </nav>
    </>
  )
}

export default Navbar