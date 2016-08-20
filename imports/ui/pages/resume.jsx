/**
 * Created by Scott on 8/17/2016.
 */
import React from 'react';

//Component imports
import { Skills } from '../components/Skills';
import { Experience } from '../components/Experience';
import { Education } from '../components/Education';

export const Resume = ( ) => {
    return(
        <div className="resume">
            <div className="filters">
                <ul className="nav nav-pills">
                    <li role="presentation" className="active"><a href="#">Full Resume</a></li>
                    <li role="presentation"><a href="#">Skills</a></li>
                    <li role="presentation"><a href="#">Experience</a></li>
                    <li role="presentation"><a href="#">Education</a></li>
                </ul>
            </div>

            <Skills />

            <Experience />

            <Education />
        </div>
    );
};
