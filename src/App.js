import React, { Component } from 'react';
import { Layout, Content} from 'react-mdl';
import Main from './Components/Main';
import AppHeader from './Components/Header/AppHeader';
import './App.css';

class App extends Component {

    render() {
        return (
            <div style={{height: '100vh', position: 'relative'}}>
                <Layout
                    className="background-image"
                    style={
                        {
                            background: 'url(https://images.unsplash.com/photo-1539605699249-e37701d294b2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80) center / cover'
                        }
                    }>
                    <AppHeader></AppHeader>
                    <Content>
                        <Main></Main>
                    </Content>
                </Layout>
            </div>
        );
    }
}

export default App;