import React, { Component } from 'react';
import { Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import { Link } from 'react-router-dom';
import Peaks from './components/peaks/Peaks';

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
                <Layout fixedHeader>
                    <Header title={<span><span style={{ color: '#ddd' }}></span>Browse Peaks</span>}>
                        <Navigation>
                            <a href="#">About</a>
                            <a href="#">Contact</a>
                            <a href="#">Missing Peak?</a>
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
                        <div className="page-content" />
                        <Peaks peaks={this.state.peaks} />
                    </Content>
                </Layout>
            </div>
        );
    }
}

export default App;