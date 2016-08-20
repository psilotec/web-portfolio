/**
 * Created by Scott on 8/17/2016.
 */
import React from 'react';

export const Resume = ( ) => {
    return(
        <div className="resume">
            <div className="filters">
                <ul className="nav nav-pills">
                    <li role="presentation" className="active"><a href="#">Full Resume</a></li>
                    <li role="presentation"><a href="#">Skills</a></li>
                    <li role="presentation"><a href="#">Professional Experience</a></li>
                    <li role="presentation"><a href="#">Education</a></li>
                </ul>
            </div>

            <div className="skills jumbotron">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Skills</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td>
                                JavaScript (ES6)
                            </td>
                            <td>
                                React JS
                            </td>
                            <td>
                                HTML 5
                            </td>
                        </tr>

                        <tr>
                            <td></td>
                            <td>
                                CSS3/SCSS/Bootstrap
                            </td>
                            <td>
                                Meteor JS
                            </td>
                            <td>
                                Git/GitHub
                            </td>
                        </tr>

                        <tr>
                            <td></td>
                            <td>
                                NPM
                            </td>
                            <td>
                                SQL/NoSQL/GraphQL
                            </td>
                            <td>
                                Agile Development
                            </td>
                        </tr>

                        <tr>
                            <td></td>
                            <td>
                                Testing solutions
                            </td>
                            <td>
                                Java
                            </td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="profexp jumbotron">
                Professional Experience
            </div>

            <div className="education jumbotron">
                Education
            </div>
        </div>
    );
};
