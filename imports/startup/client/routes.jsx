/**
 * Created by Scott on 8/17/2016.
 */
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

//Component imports
import { App } from '../../ui/layouts/app.jsx';

//Page component imports
import { About } from '../../ui/pages/about.jsx';
import { Resume } from '../../ui/pages/resume.jsx';
import { Contact } from '../../ui/pages/contact.jsx';

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
});