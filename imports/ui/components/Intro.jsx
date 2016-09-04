/**
 * Created by Scott on 8/28/2016.
 */
import React from 'react';

export const Intro = ( ) => {
    return(
        <div className="intro">
            <div className="sky">
                <img className="me" src="https://s3.amazonaws.com/sdevito-web-portfolio/aboutMe.jpg" />
                <div className="description">
                    <h1>Hey, I'm Scott</h1>
                    <p>I'm a 26 year old programmer and analyst. I love creating things, collaborating with people, and solving problems. The ever-changing nature of modern web technology fascinates me and I'm constantly looking for new ways to grow.</p>
                </div>
                <div className="sun">
                    <img src="https://s3.amazonaws.com/sdevito-web-portfolio/sun.png" />
                </div>
            </div>
            <div className="ground">
            </div>
        </div>
    );
};

