import React, { Component } from 'react';
import { Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import { Link } from 'react-router-dom';
import Peaks from './components/peaks';

class App extends Component {
    state = {
        peaks: [],
    };

    componentDidMount() {
        fetch('http://localhost:2999/peaks')
        .then(res => res.json())
        .then((data) => {
            this.setState({peaks: data})
        })
        .catch(console.log)
    }

    render() {
        return (
            <div style={{height: '100vh', position: 'relative'}}>
                <Layout style={{background: 'url() center / cover'}}>
                    <Header
                        transparent title="Welcome to Hikrr"
                        style={{color: 'black'}}>
                        <Navigation>
                            <Link to="/about">About</Link>
                            <Link to="/contact">Contact</Link>
                        </Navigation>
                    </Header>
                    <Drawer title="Title">
                        <Navigation>
                            <Link to="/about">About</Link>
                            <Link to="/contact">Contact</Link>
                        </Navigation>
                    </Drawer>
                    <Content style={{height: '50%'}}>
                        <div className="page-content" />
                        <Peaks peaks={this.state.peaks} />
                    </Content>
                </Layout>
            </div>
        );
    }
}

export default App;