import React, { Component } from 'react';
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
            <Peaks peaks={this.state.peaks} />
        );
    }
}

export default App;