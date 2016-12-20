/**
 * Created by Scott on 8/17/2016.
 */
import React, { Component } from 'react';
import { Intro } from '../components/Intro'

class About extends Component {
    render() {
        return(
            <div className="about">
                <div className="welcome">
                    <h1>Welcome!</h1>
                    <p>Thanks for taking the time to stop by.</p>
                </div>
                <Intro />
            </div>
        );
    }
};

export default About;


