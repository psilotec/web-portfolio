/**
 * Created by Scott on 8/20/2016.
 */
import React from 'react';

export const Skills = (props) => {
    return(
        <div style={props.visible ? {display: 'block'} : {display: 'none'}}>
            <h3 className="skills header">Skills</h3>
            <div className="jumbotron">
                <table className="table">
                    <thead>
                    <tr>
                        <th>Proficient or familiar with:</th>
                        <th></th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
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
                        <td>
                            CSS3/SCSS
                        </td>
                        <td>
                            Meteor JS
                        </td>
                        <td>
                            Git/GitHub
                        </td>
                    </tr>

                    <tr>
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
        </div>
    );
};