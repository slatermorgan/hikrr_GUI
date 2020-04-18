import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Index from './index';
import Peaks from './peaks';

const Main = () => (
    <Switch>
        <Route exact path="/" component={ Index } />
        <Route path="/peaks" component={ Peaks } />
        <Route path="/about" component={  } />
        <Route path="/contact" component={  } />
    </Switch>
);

export default Main;