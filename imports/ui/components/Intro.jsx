/**
 * Created by Scott on 8/28/2016.
 */
import React from 'react';

export const Intro = ( ) => {
    return(
        <div className="intro">
            <div className="sky">
                <img className="me" src="https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/12246816_10153140941527377_8613032141905812023_n.jpg?oh=bcfd87ab53e52879f7223a6d9b261c7d&oe=5847905F" />
                <div className="description">
                    <h1>Hey, I'm Scott</h1>
                    <p>I'm a 26 year old programmer and analyst. I love creating things, collaborating with people, and solving problems. The ever-changing state of modern web technologies fascinates me and I'm constantly looking for new ways to grow.</p>
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

