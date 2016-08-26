/**
 * Created by Scott on 8/17/2016.
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

//Component imports
import { Full } from '../components/Full';
import { Skills } from '../components/Skills';
import { Experience } from '../components/Experience';
import { Education } from '../components/Education';

class Resume extends Component {
    constructor(props) {
        super(props);

        //State to keep track of which child component(s) to display
        this.state = {
            visibleComponent: "full"
        };
    }

    //Event Handler for resume filter
    toggleResumeFilter(id, event) {
        this.setState({
            visibleComponent: id
        });
        //debug
        console.log(id);
    }
    render() {
        return(
            <div className="resume">
                <div className="filters">
                    <div className="btn-group btn-group-justified" role="group" aria-label="...">
                        <div className="btn-group" role="group">
                            <button type="button" className="btn btn-default" onClick={this.toggleResumeFilter.bind(this, "full")}>Full Resume</button>
                        </div>
                        <div className="btn-group" role="group">
                            <button type="button" className="btn btn-default" onClick={this.toggleResumeFilter.bind(this, "skills")}>Skills</button>
                        </div>
                        <div className="btn-group" role="group">
                            <button type="button" className="btn btn-default" onClick={this.toggleResumeFilter.bind(this, "experience")}>Experience</button>
                        </div>
                        <div className="btn-group" role="group">
                            <button type="button" className="btn btn-default" onClick={this.toggleResumeFilter.bind(this, "education")}>Education</button>
                        </div>
                    </div>
                </div>

                <Full visible={this.state.visibleComponent === "full"} />
                <Skills visible={this.state.visibleComponent === "skills"} />
                <Experience visible={this.state.visibleComponent === "experience"} />
                <Education visible={(this.state.visibleComponent === "education")} />

            </div>
        );
    }
};

export default Resume;