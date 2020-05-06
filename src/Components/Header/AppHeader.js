import React, { Component } from 'react'
import { Header, Navigation, Drawer} from 'react-mdl';
import { Link } from 'react-router-dom';

const AppHeader = () => {
    return (
        <>
            <Header transparent title="Hikrr" className="header-colour" style={{color: 'white'}}>
                <Navigation>
                    <Link to="/peaks">Peaks</Link>
                    <Link to="/about">About</Link>
                    <Link to="/Login">Login</Link>
                    <Link to="/signup">Sign Up</Link>
                    <Link to="#">Missing Peak?</Link>
                </Navigation>
            </Header>
            <Drawer title="Hikrr">
                <Navigation>
                    <a href="#">About</a>
                    <a href="#">Contact</a>
                    <a href="#">Missing Peak?</a>
                </Navigation>
            </Drawer>
        </>
    );
}

export default AppHeader;