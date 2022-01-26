import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

class App extends Component {
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
        jsonData: json,
        isLoaded: true
    })})
  }

  getTitles() {
    return this.state.jsonData.map(entry => entry.title);
  }

  render() {
    let titles = this.getTitles();
    let lists = this.state.isLoaded ? titles.map(entry => <ul key={entry}>{entry}</ul>) : <ul>No List Found</ul>;

    return (
      <div className="App">
        <header className="App-header">
          <div className="Title-Bar">
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              {lists}
            </a>
          </div>
          <div className='To-Do-View'>
            <img src={logo} className="App-logo" alt="logo" />
          </div>
        </header>
      </div>);
  }
}

export default App;
