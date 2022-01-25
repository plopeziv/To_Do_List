import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jsonData: [],
      isLoaded: false,
      activeList: ""
    }
  }

  componentDidMount(){
    fetch("http://localhost:3001/lists/")
    .then(response => response.json())
    .then(json => {
      this.setState({
        jsonData: json.map(entry=> entry.title),
        isLoaded: true
    })
  })
  }

  render() {
    let lists = this.state.isLoaded ? this.state.jsonData.map(entry => 
      <ul key={entry}>{entry}</ul>
    ) : <ul>No List Found</ul>;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            {lists}
          </a>
        </header>
      </div>);
  }
}

export default App;
