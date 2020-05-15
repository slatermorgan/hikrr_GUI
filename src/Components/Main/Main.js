import React, {useState} from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

import Index from '../Index';
import Peaks from '../Peaks';
import Peak from '../Peak';
import Signup from '../Signup/Signup';
import Signin from '../Signin';

const Main = () => {
    const [title, updateTitle] = useState(null);
    const [errorMessage, updateErrorMessage] = useState(null);

    return (
        <Switch>
            <Route exact path="/" component={ withRouter(Index) } />
            <Route exact path="/peaks" component={ withRouter(Peaks) } />
            <Route path="/peaks/:id" children={<Peak/>} />
            <Route path="/about"/>
            <Route path="/contact"/>
          <Route
            exact
            path="/signup"
            render={props => (
                <Signup
                    {...props}
                    showError={updateErrorMessage}
                    updateTitle={updateTitle}
                />
            )}
          />
          <Route path="/signin" component={ withRouter(Signin) } />
        </Switch>
    );
};

export default Main;