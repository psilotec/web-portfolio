/**
 * Created by Scott on 8/3/2016.
 */
import React from 'react';
import ReactDOM from 'react-dom';

//Component imports
import { Nav } from '../components/Nav.jsx';
import { Banner } from '../components/Banner.jsx';

//Main App component
export const App = ( { children } ) => {
    return(
        <div>
            <Nav />
            <Banner />
            { children }
        </div>
    );
};

