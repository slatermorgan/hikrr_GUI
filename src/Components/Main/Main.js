import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

import Index from '../Index';
import Peaks from '../Peaks';
import SignUp from '../Signup';
import Login from '../Login';

const Main = () => (
    <Switch>
        <Route exact path="/" component={ withRouter(Index) } />
        <Route path="/signup" component={ withRouter(SignUp) } />
        <Route path="/login" component={ withRouter(Login) } />
        <Route path="/peaks" component={ withRouter(Peaks) } />
        <Route path="/about"/>
        <Route path="/contact"/>
    </Switch>
);

export default Main;