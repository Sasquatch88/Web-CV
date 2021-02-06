import React from 'react';
import classes from './MenuItem.css';

const menuItem = ( props ) => (
    <div className={classes.MenuItem}>
        <div>{props.children}</div>
    </div>
);

export default menuItem;