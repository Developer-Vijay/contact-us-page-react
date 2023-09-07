import React from 'react';
import styles from "./Navigation.module.css";

const NavBarComponent = () => {
  return (
    <nav className={`${styles.navigation} container`}>
      <div className='app-logo'> 
        <img src='/images/logo.png' alt='do some coding logo'/>
      </div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

export default NavBarComponent;
