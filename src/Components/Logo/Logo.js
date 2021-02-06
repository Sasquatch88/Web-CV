import React from 'react';

import gregor from '../../Assets/Images/gregor.png';
import classes from './Logo.css';

const logo = (props) => (
    <div className={classes.Logo} style={{height: props.height}}>
        <img src={gregor} alt="Logo" />
    </div>
);

export default logo;