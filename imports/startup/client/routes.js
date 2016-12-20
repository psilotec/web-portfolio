/**
 * Created by Scott on 8/17/2016.
 */
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

//Component imports
import { App } from '../../ui/layouts/app';

//Page component imports
import About from '../../ui/pages/About';
import Resume from '../../ui/pages/Resume';
import { Contact } from '../../ui/pages/Contact';
import { NotFound } from '../../ui/pages/NotFound';

Meteor.startup( () => {
    render(
        <Router history={ browserHistory }>
            <Route path="/" component={ App }>
                <IndexRoute component={ About } />
                <Route path="/resume" component={ Resume } />
                <Route path="/contact" component={ Contact } />
            </Route>
            <Route path="*" component={ NotFound } />
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
            contact = document.getElementsByClassName("contact")[0],
            intro = document.getElementsByClassName("intro-container")[0],
            range = 50,
            scrollTop = document.body.scrollTop;

        //intro is undefined if the About component isn't active
        if ((scrollTop > range) && (intro != undefined)) {
            intro.classList.add("intro-container-scroll");
            banner.classList.add("blurred");
            nav.classList.add("nav-scroll");
        } else if ((scrollTop < range) && (intro != undefined)) {
            intro.classList.remove("intro-container-scroll");
            banner.classList.remove("blurred");
            nav.classList.remove("nav-scroll");
        } else if ((scrollTop > range) && ((contact != undefined) || (resume != undefined))) {
            banner.classList.add("blurred");
            nav.classList.add("nav-scroll");
        } else if ((scrollTop < range) && ((contact != undefined) || (resume != undefined))) {
            banner.classList.remove("blurred");
            nav.classList.remove("nav-scroll");
        }
    }
);
