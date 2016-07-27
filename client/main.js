/**
 * Created by Scott on 7/11/2016.
 */
import React from 'react';
import ReactDOM from 'react-dom';

import Nav from './components/nav';
import Banner from './components/banner';
import Container from './components/container';
import Footer from './components/footer';

const App = () => {
    return(
        <div>
            <Nav />
            <Banner />
            <Container />
            <Footer />
        </div>
    );
};

Meteor.startup(() => {
    ReactDOM.render(<App />, document.querySelector('.render-target'))
});