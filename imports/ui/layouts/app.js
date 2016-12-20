/**
 * Created by Scott on 8/3/2016.
 */
import React from 'react';
import ReactDOM from 'react-dom';

//Component imports
import { Nav } from '../components/Nav';
import { Banner } from '../components/Banner';

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
