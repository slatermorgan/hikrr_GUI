import React, { Component } from 'react';
import { Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import { Link } from 'react-router-dom';
import Main from './Components/Main';
import './App.css';

class App extends Component {

    render() {
        return (

            <div style={{height: '100vh', position: 'relative'}}>
                <Layout className="background-image" style={{background: 'url(https://images.unsplash.com/photo-1539605699249-e37701d294b2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80) center / cover'}}>
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
                    <Content>
                        <Main></Main>
                    </Content>
                </Layout>
            </div>
        );
    }
}

export default App;