import React, { Component } from 'react';
import { Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import { Link } from 'react-router-dom';
import Peaks from './components/peaks/Peaks';
import Main from './components/main';

class App extends Component {

    render() {
        return (

            <div style={{height: '100vh', position: 'relative'}}>
                <Layout fixedHeader>
                    <Header title={<span><span style={{ color: '#ddd' }}></span>Browse Peaks</span>}>
                        <Navigation>
                            <Link to="/peaks">Peaks</Link>
                            <Link to="/about">About</Link>
                            <Link to="/signup">Sign Up</Link>
                            <Link to="#">Contact</Link>
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