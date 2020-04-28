import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import Index from './index/index';
import Peaks from './peaks/Peaks';
import SignUp from './signup/signup';

const Main = () => (
    <Switch>
        <Route exact path="/" component={ withRouter(Index) } />
        <Route path="/signup" component={ withRouter(SignUp) } />
        <Route path="/peaks" component={ withRouter(Peaks) } />
        <Route path="/about"/>
        <Route path="/contact"/>
    </Switch>
);

export default Main;