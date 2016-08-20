/**
 * Created by Scott on 8/20/2016.
 */
import React from 'react';

export const ResumeFilter = ( ) => {
    return(
        <div className="filters">
            <ul className="nav nav-pills">
                <li role="presentation" className="active"><a href="#">Full Resume</a></li>
                <li role="presentation"><a href="#">Skills</a></li>
                <li role="presentation"><a href="#">Experience</a></li>
                <li role="presentation"><a href="#">Education</a></li>
            </ul>
        </div>
    );
};