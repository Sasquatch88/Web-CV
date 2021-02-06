import React from 'react';

import classes from './Navbar.css';
import Logo from '../Logo/Logo';
import Menu from '../UI/Menu/Menu';

const navbar = (props) => (
    <ul className={classes.Navbar}>
        <Logo />
        <div className={classes.NavbarHeader}>Grzegorz Dytrych</div>
        <Menu />
    </ul>
);

export default navbar;