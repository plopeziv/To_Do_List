import logo from './logo.svg';
import ListView from './ListView';
import './App.css';
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jsonData: [],
      isLoaded: false,
      activeTitle: "",
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
  
  filterJson(title) {
    const activeList = this.state.jsonData.filter((json) => {
      return json.title === title});

    return activeList[0];
  }

  getTitles() {
    return this.state.jsonData.map(entry => entry.title);
  }

  render() {
    let titles = this.getTitles();
    let lists = this.state.isLoaded ? titles.map(
      entry => <ul key={entry}>{entry}</ul>)  : <ul>No List Found</ul>;

    let active = this.filterJson(this.state.activeTitle)

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
            <ListView
              activeList = {active}
            />
          </div>
        </header>
      </div>);
  }
}

export default App;
