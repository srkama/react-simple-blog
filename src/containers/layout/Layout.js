import React, { Component } from 'react';
import Aux from '../../components/hoc/aux';

import classes from './layout.css'

class Layout extends Component {

    state = {}

    render() {
        return(
            <Aux>
                <main className={classes.layout}>
                    {this.props.children}
                </main>
            </Aux>
        );
    }
}


export default Layout;