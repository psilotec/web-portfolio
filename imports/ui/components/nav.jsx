/**
 * Created by Scott on 7/26/2016.
 */
import React from 'react';
import { IndexLink, Link } from 'react-router';

//Nav component
export const Nav = () => {
    return (
        <nav className="navbar navbar-default navbar-static-top">
            <div className="container-fluid">
                <ul className="nav nav-pills nav-justified">
                    <li className="navbar-text" role="presentation"><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
                    <li className="navbar-text" role="presentation"><a href="https://github.com/psilotec">GitHub</a></li>
                    <li className="navbar-text" role="presentation"><Link to="/resume" activeClassName="active">Resume</Link></li>
                    <li className="navbar-text" role="presentation"><Link to="/contact" activeClassName="active">Contact</Link></li>
                </ul>
            </div>
        </nav>
    );
};
