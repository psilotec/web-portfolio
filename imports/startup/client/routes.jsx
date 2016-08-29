/**
 * Created by Scott on 8/17/2016.
 */
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

//Component imports
import { App } from '../../ui/layouts/app.jsx';

//Page component imports
import About from '../../ui/pages/About.jsx';
import Resume from '../../ui/pages/Resume.jsx';
import { Contact } from '../../ui/pages/Contact.jsx';

Meteor.startup( () => {
    render(
        <Router history={ browserHistory }>
            <Route path="/" component={ App }>
                <IndexRoute component={ About } />
                <Route path="/resume" component={ Resume } />
                <Route path="/contact" component={ Contact } />
            </Route>
        </Router>,
        document.querySelector( '.render-target' )
    );
},

    //Nav and Banner blur onscroll effect
    //About component onscroll opacity effect
    window.onscroll = function(e) {
        var banner = document.getElementsByClassName("banner")[0],
            nav = document.getElementsByClassName("navbar")[0],
            resume = document.getElementsByClassName("resume")[0],
            sky = document.getElementsByClassName("sky")[0],
            range = 50,
            scrollTop = document.body.scrollTop;

        //sky is undefined if the About component isn't active
        if ((scrollTop > range) && (sky != undefined)) {
            sky.classList.add("skySunny");
            banner.classList.add("blurred");
            nav.classList.add("navScroll");
        } else if ((scrollTop < range) && (sky != undefined)) {
            sky.classList.remove("skySunny");
            banner.classList.remove("blurred");
            nav.classList.remove("navScroll");
        } else if ((scrollTop > range) && (resume != undefined)) {
            banner.classList.add("blurred");
            nav.classList.add("navScroll");
        } else if ((scrollTop < range) && (resume != undefined)) {
            banner.classList.remove("blurred");
            nav.classList.remove("navScroll");
        }
    }
);