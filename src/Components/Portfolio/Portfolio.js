import React from 'react';

import classes from './Portfolio.css';
import PortfolioItem from './PortfolioItem/PortfolioItem';
import Galaxus from '../../Assets/Images/GalaxusPreview.png';
import Sashimi from '../../Assets/Images/SashimiPreview.png';
import SimpleForm from '../../Assets/Images/SimpleFormPreview.png';

const portfolio = () => (
    <div className={classes.Portfolio}>
        <h1>My works</h1>
        <button className={classes.Button}><a href='https://github.com/Sasquatch88' target="_blank" rel="noopener noreferrer">Visit my GitHub page to see more!</a></button>
        <PortfolioItem header='Page about space...' source={Galaxus}/>
        <PortfolioItem header='Online book store (unfinished)' source={Sashimi}/>
        <PortfolioItem header='Simple submit form with validation' source={SimpleForm}/>
        <button className={classes.Button}><a href='https://github.com/Sasquatch88' target="_blank" rel="noopener noreferrer">Visit my GitHub page to see more!</a></button>
    </div>
);

export default portfolio;