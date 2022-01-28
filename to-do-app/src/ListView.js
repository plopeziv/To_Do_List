import logo from './logo.svg';
import React, { Component } from 'react';

class ListView extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    let view

    if (this.props.activeList === undefined) {
      view = <img src={logo} className="App-logo" alt="logo" /> 
    } else {
      console.log(this.props.activeList.items)
      view = this.props.activeList.items.map(
        entry => <li key={entry.toDoItem}> {entry.toDoItem}  </li>
      )
    }

    return (
        <div className="List-View">{view}</div>
    );
  }
}

export default ListView;