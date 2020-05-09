import React, {useState} from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

import Index from '../Index';
import Peaks from '../Peaks';
import Peak from '../Peak';
import SignUp from '../Signup/Signup';
import Signin from '../Signin';

const Main = () => {
    const [title, updateTitle] = useState(null);
    const [errorMessage, updateErrorMessage] = useState(null);

    return (
        <Switch>
            <Route exact path="/" component={ withRouter(Index) } />
            {/* <Route path="/signup" component={ withRouter(SignUp) } /> */}
            <Route exact path="/peaks" component={ withRouter(Peaks) } />
            <Route path="/peaks/:id" children={<Peak/>} />
            <Route path="/login" component={ withRouter(Signin) } />
            <Route path="/about"/>
            <Route path="/contact"/>
            <Route path="/signup">
                <SignUp
                    showError={updateErrorMessage}
                    updateTitle={updateTitle}
                />
            </Route>
        </Switch>
    );
};

export default Main;