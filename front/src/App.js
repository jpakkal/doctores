import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      solution: 0
    }
  }

  async componentDidMount() {
    const response = await fetch('http://localhost:8080/test');
    const data = await response.json();
    this.setState({ solution: data.result[0].solution });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
        </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React { this.state.solution }
        </a>
        </header>
      </div>
    );
  }
}

export default App;
