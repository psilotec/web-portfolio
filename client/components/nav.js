/**
 * Created by Scott on 7/26/2016.
 */
import React from 'react';

//Nav component
const Nav = () => {
    return (
        <nav className="navbar navbar-default navbar-fixed-top">
            <div className="container-fluid">
                <ul className="nav nav-pills nav-justified">
                    <li className="navbar-text" role="presentation"><a href="#">Home</a></li>
                    <li className="navbar-text" role="presentation"><a href="#">About Me</a></li>
                    <li className="navbar-text" role="presentation"><a href="https://github.com/psilotec">GitHub</a></li>
                    <li className="navbar-text" role="presentation"><a href="#">Resume</a></li>
                    <li className="navbar-text" role="presentation"><a href="#">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Nav;