import React from 'react';
import classes from './Footer.css';
import Logo from '../../Assets/Images/gregor.png';

const Menu = (props) => (
            <div className={classes.Footer}>
               <img src={Logo} alt="logo"></img>
               <h1>Copyright &copy; Grzegorz Dytrych 2021</h1>
            </div>

)

   

export default Menu;