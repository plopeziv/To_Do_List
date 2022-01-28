import ListItem from './ListItem';
import logo from './logo.svg';
import React, { Component } from 'react';

class ListView extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    let view

    if (this.props.activeList === undefined) {
      view = <div className='Logo-Container'> <img src={logo} className="App-logo" alt="logo" /></div>
    } else {
      console.log(this.props.activeList.items)
      view = this.props.activeList.items.map(
        entry => <ListItem key={entry.toDoItem} itemProperties = {entry}></ListItem>
      )
    }

    return (
        <div className="List-View">{view}</div>
    );
  }
}

export default ListView;