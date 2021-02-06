import React, { Component } from 'react';

import classes from './Layout.css';
import Navbar from '../../Components/Navbar/Navbar';
import ContentManager from '../../Containers/ContentManager/ContentManager';

class Layout extends Component {

    render () {
        return (
            <div className={classes.Layout}>
                <Navbar />
                <ContentManager />
            </div>
        )
    }
}

export default Layout;