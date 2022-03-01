import ListView from './ListView/ListView';
import NewList from './ListView/NewList';
import './ToDoApp.css';
import React, { Component } from 'react';

class ToDoApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toDoLists: [],
      isLoaded: false
    }

    this.submitHandler = this.putActiveList.bind(this);
    this.saveActiveListHander = this.changeActiveList.bind(this);
    this.createNewListHandler = this.postNewList.bind(this);
    this.getAllListsHandler = this.getAllLists.bind(this);
    this.deleteListHandler = this.deleteActiveList.bind(this);
  }
  
  filterLists(title) {
    const activeList = this.state.toDoLists.filter((list) => {
      return list.title === title});

    return activeList[0];
  }

  getTitles() {
    return this.state.toDoLists.map(entry => entry.title);
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

  deleteActiveList() {
    this.deleteList();
    this.changeActiveList(undefined);
    this.setState({ isLoaded: false })
    this.getAllLists();
  }

  deleteList() {
    if (this.state.activeList === undefined) {
      return;
    }

    let list = this.state.activeList;
    const url = `http://localhost:3001/lists/${list.id}`;

    return fetch(url, {method: "DELETE", headers: new Headers({'content-type': 'application/json'}), body: JSON.stringify(list)});
  }

  getAllLists() {
    fetch("http://localhost:3001/lists/")
    .then(response => response.json())
    .then(json => json.sort((x,y) => y.id - x.id))
    .then(lists => {
      this.setState({
        toDoLists: lists,
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
        <div key={entry} className="Title-Tab">
          <img
          alt="Minus-Clipboard" 
          className= "List-Image" 
          src="./remove-list.png" 
          onClick={this.deleteListHandler} />
          <ul onClick={() => 
            this.changeActiveList(this.filterLists(entry))}>{entry}</ul>
        </div>
      ): <ul></ul>;

    return (
        <header
          class='min-h-screen bg-[#282c34] flex flex-col items-center justify-center text-xl md:text-3xl'>
          <div 
          class='bg-pedros-color flex rounded-xl overflow-scroll mb-3.5 w-10/12 md:w-13/20 max-w-4xl h-1/20vh lg:h-13/200vh'>
              <NewList 
                createList = {this.createNewListHandler}
                getAllLists = {this.getAllListsHandler}
              />
              {lists}
          </div>
          <div className='To-Do-View'>
            <ListView
              activeList = {this.state.activeList}
              saveActiveList = {this.saveActiveListHander}
            />
          </div>
          <button className='Submit-Button' 
          disabled={isDisabled} 
          onClick={this.submitHandler}>
            Submit
          </button>
        </header>
      );
  }
}

export default ToDoApp;
