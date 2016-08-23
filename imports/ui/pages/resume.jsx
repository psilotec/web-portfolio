/**
 * Created by Scott on 8/17/2016.
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

//Component imports
import { Skills } from '../components/Skills';
import { Experience } from '../components/Experience';
import { Education } from '../components/Education';

class Resume extends Component {
    constructor(props) {
        super(props);

        this.state = {
            visibleComponent: "Full Resume"
        };
        this.toggleResumeFilter = this.toggleResumeFilter.bind(this);
    }

    //Event Handler for resume filter
    toggleResumeFilter() {
        this.setState({
            visibleComponent: this.href
        });
        console.log(this.name);
    }
    render() {
        console.log(this.state.visibleComponent);
        return(
            <div className="resume">
                <div className="filters">
                    <ul className="nav nav-pills">
                        <li role="presentation"><a href="#full" onClick={this.toggleResumeFilter}>Full Resume</a></li>
                        <li role="presentation"><a href="#skills" onClick={this.toggleResumeFilter}>Skills</a></li>
                        <li role="presentation"><a href="#experience" onClick={this.toggleResumeFilter}>Experience</a></li>
                        <li role="presentation"><a href="#education" onClick={this.toggleResumeFilter}>Education</a></li>
                    </ul>
                </div>

                { this.state.visibleComponent === "Skills" ? <Skills /> : '' }

                { this.state.visibleComponent === "Experience" ? <Experience /> : '' }

                { this.state.visibleComponent === "Education" ? <Education /> : '' }

                { this.state.visibleComponent === "Full Resume" ? <Skills /> && <Experience /> && <Education /> : '' }

            </div>
        );
    }
};

export default Resume;