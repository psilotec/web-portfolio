/**
 * Created by Scott on 8/17/2016.
 */
import React from 'react';

//Component imports
import { Skills } from '../components/Skills';
import { Experience } from '../components/Experience';
import { Education } from '../components/Education';
import { ResumeFilter } from '../components/ResumeFilter';

export const Resume = ( ) => {
    return(
        <div className="resume">
            <ResumeFilter />

            <Skills />

            <Experience />

            <Education />
        </div>
    );
};
