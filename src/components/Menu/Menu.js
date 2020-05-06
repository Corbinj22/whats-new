import React from 'react';
import './Menu.css'

const Menu = () => {
  return (
    <div className='nav-container'>
      <h2>Whats New?</h2>
      <div>
        <p className='nav-icon local-news'>Local News</p>
        <p className='nav-icon technology'>technology</p>
        <p className='nav-icon entertainment'>entertainment</p>
        <p className='nav-icon health'>health</p>
      </div>
    </div>
  )
}

export default Menu;
