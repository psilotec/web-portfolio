/**
 * Created by Scott on 8/20/2016.
 */
import React from 'react';

export const Skills = (props) => {
    return(
        <div style={props.visible ? {display: 'block'} : {display: 'none'}}>
            <h3 className="skills header">Skills</h3>
            <div className="panel panel-default">
                <div className="panel-body skills-panel">
                    <p className="child-skill">JavaScript (ES6)</p>

                    <p className="child-skill">React JS</p>

                    <p className="child-skill">HTML 5</p>

                    <p className="child-skill">CSS3/SCSS</p>

                    <p className="child-skill">Meteor JS</p>

                    <p className="child-skill">Git/GitHub</p>

                    <p className="child-skill">NPM</p>

                    <p className="child-skill">SQL/NoSQL</p>

                    <p className="child-skill">GraphQL</p>

                    <p className="child-skill">Agile Development</p>

                    <p className="child-skill"> Testing solutions</p>

                    <p className="child-skill">Java</p>
                </div>
            </div>
        </div>
    );
};