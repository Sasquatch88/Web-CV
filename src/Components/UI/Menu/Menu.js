import React from 'react';
import classes from './Menu.css';
import MenuItem from './MenuItem/MenuItem';
import {NavLink, HashRouter} from 'react-router-dom';

const Menu = (props) => (
    
        <HashRouter>
            <div className={classes.Menu}>
                <NavLink className={classes.NavLink} exact to='/'><MenuItem>Home</MenuItem></NavLink>
                <NavLink className={classes.NavLink} to='/portfolio'><MenuItem>Portfolio</MenuItem></NavLink>
                <NavLink className={classes.NavLink} to='/about'><MenuItem>O mnie</MenuItem></NavLink>
            </div>
        </HashRouter>

)

   

export default Menu;
