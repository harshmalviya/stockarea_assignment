import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';
const Header = () => {
  return (
    <header>
      <nav className={classes.nav}>
        <div className={classes.navItem}>
          <NavLink to="/">Warehouses</NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Header;
