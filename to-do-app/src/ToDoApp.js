import ListView from './ListView/ListView';
import NewList from './NewList';
import './ToDoApp.css';
import React, { Component } from 'react';

class ToDoApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      jsonData: [],
      isLoaded: false
    }

    this.submitHandler = this.putActiveList.bind(this);
    this.saveActiveListHander = this.changeActiveList.bind(this);
    this.createNewListHandler = this.postNewList.bind(this);
    this.getAllListsHandler = this.getAllLists.bind(this);
  }
  
  filterJson(title) {
    const activeList = this.state.jsonData.filter((json) => {
      return json.title === title});

    return activeList[0];
  }

  getTitles() {
    return this.state.jsonData.map(entry => entry.title);
  }

  changeActiveList(list) {
    this.setState({activeList: list});
  }

  putActiveList() {
    let list = this.state.activeList;
    const url = `http://localhost:3001/lists/${list.id}`;

    return fetch(url, {method: "PUT", headers: new Headers({'content-type': 'application/json'}), body: JSON.stringify(list)});
  }

  postNewList(list) {
    const url = `http://localhost:3001/lists/`;

    return fetch(url, {method: "POST", headers: new Headers({'content-type': 'application/json'}), body: JSON.stringify(list)});
  }

  getAllLists() {
    fetch("http://localhost:3001/lists/")
    .then(response => response.json())
    .then(json => {
      this.setState({
        jsonData: json,
        isLoaded: true
      })
    })
  }

  componentDidMount() {
    this.getAllLists();
  }

  render() {
    let titles = this.getTitles();
    let isDisabled;
   
    if (!this.state.activeList) {
      isDisabled = true;
    } else {
      isDisabled = false;
    }
    
    let lists = this.state.isLoaded ? titles.map(
      entry => 
        <div className="Title-Tab">
          <img className= "List-Image" src="./remove-list.png"/>
          <ul key={entry} onClick={() => 
            this.changeActiveList(this.filterJson(entry))}>{entry}</ul>
        </div>
      ): <ul>No List Found</ul>;

    return (
      <div className="App">
        <header className="App-header">
          <div className="Title-Bar">
            <a
              className="App-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <NewList 
                createList = {this.createNewListHandler}
                getAllLists = {this.getAllListsHandler}
              />
              {lists}
            </a>
          </div>
          <div className='To-Do-View'>
            <ListView
              activeList = {this.state.activeList}
              saveActiveList = {this.saveActiveListHander}
            />
          </div>
          <button className='Submit-Button' disabled={isDisabled} onClick={this.submitHandler}>Submit</button>
        </header>
      </div>);
  }
}

export default ToDoApp;
