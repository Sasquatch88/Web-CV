import React, { Component } from 'react';
// import Auxiliary from '../../HOC/Auxiliary/Auxiliary';
import HomePage from '../../Components/HomePage/HomePage';
import Portfolio from '../../Components/Portfolio/Portfolio';
import About from '../../Components/About/About';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import classes from './ContentManager.css';
import {Route, HashRouter} from 'react-router-dom';

class ContentManager extends Component {

    state = {
        show: false
    }

    showHandler = () => {
        this.setState( ( prevState )  => {
            return {show: !prevState.show};
        } );
    }

    render () {
        return (
            <HashRouter className={classes.ContentManager}>
                <Navbar />
                <Route exact path='/' component={HomePage} />
                <Route path='/portfolio' component={Portfolio} />
                <Route path='/about' component={About} />
                <Footer />
            </HashRouter>
        )
    }

}

export default ContentManager;