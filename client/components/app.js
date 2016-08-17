/**
 * Created by Scott on 8/3/2016.
 */
import React from 'react';
import ReactDOM from 'react-dom';

import Nav from './nav';
import Banner from './banner';
import Container from './container';

export default App = () => {
    return(
        <div>
            <Nav />
            <Banner />
            <Container />
        </div>
    );
};