import React, { Component } from 'react';

class ListItem extends Component {
  constructor(props) {
    super(props);
  }


  render() {

    return (
        <div className="List-Item-Container">{this.props.itemProperties.toDoItem}</div>
    );
  }
}

export default ListItem;