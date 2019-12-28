import React, { Component } from 'react';
import './App.css';
import Navigation from './Navigation';
import Therapeuts from './components/therapeuts';

class App extends Component {
    render() {
  return (
    <div className="App">
      <Navigation />
      <Therapeuts therapeuts={this.state.therapeuts} />
    </div>
  );
    }
    state = {therapeuts: []};
    componentDidMount() {
        fetch('http://127.0.0.1:8000/therapeuts/')
            .then(res => res.json())
            .then((data) => {
                this.setState({ therapeuts: data })
            })
            .catch(console.log)}
}

export default App;
