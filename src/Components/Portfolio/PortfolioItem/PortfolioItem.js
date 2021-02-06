import React from 'react';
import classes from './PortfolioItem.css';

const portfolio = (props) => (
    <div className={classes.PortfolioItem}>
        <h1>{props.header}</h1>
        <img src={props.source} alt='Galaxus page'/>
    </div>
);

export default portfolio;