/**
 * Created by Scott on 8/17/2016.
 */
import React from 'react';

export const Contact = ( ) => {
    return(
        <div className="contact">
            <h2>Say hello!</h2>
            <p>scottadevito@gmail.com</p>
            <p>
                <a href="https://www.linkedin.com/pub/scott-devito/91/239/34" target="_blank">
                    <img src="https://static.licdn.com/scds/common/u/img/webpromo/btn_profile_greytxt_80x15.png" width="90" height="16" />
                </a>
            </p>
            <p>
                <a href="https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=scottadevito@gmail.com">
                    <img className="email" src="https://s3.amazonaws.com/sdevito-web-portfolio/gmailIcon.png" />
                </a>
            </p>
        </div>
    );
};