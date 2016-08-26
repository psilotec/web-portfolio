/**
 * Created by Scott on 8/25/2016.
 */
import React from 'react';

import { Skills } from './Skills';
import { Experience } from './Experience';
import { Education } from './Education';

export const Full = (props) => {
    return(
        <div className ="full" style={props.visible ? {display: 'block'} : {display: 'none'}}>
            <div className="skills-width">
                <Skills visible="true" />
            </div>
            <Experience visible="true" />
            <Education visible="true" />
        </div>
    );
};