/**
 * Created by Scott on 8/17/2016.
 */
import React from 'react';

export const Contact = ( ) => {
    return(
        <div className="contact">
            <div className="contact-container">

                <p>
                    <a href="mailto:scottadevito@gmail.com">
                        <div className="btn3"><h5>Email</h5></div>
                    </a>
                </p>
                
                <img className="email-logo" src="https://s3.amazonaws.com/sdevito-web-portfolio/mailIcon1.png" />

                <p>
                    <a href="https://www.linkedin.com/pub/scott-devito/91/239/34" target="_blank">
                        <div className="btn3"><h5>LinkedIn</h5></div>
                    </a>
                </p>

            </div>
        </div>
    );
};