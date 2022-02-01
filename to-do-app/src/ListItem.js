import React, { Component } from 'react';

class ListItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
        <div className="List-Item-Container">
            <img src="/remove.png" className="Remove-Button"></img>
            <div className = "To-Do-Space">{this.props.itemProperties.toDoItem}</div>
            <div className = "List-Item-Button">
                <input type="checkbox" className='List-Checkbox'></input>
            </div>
        </div>
    );
  }
}

export default ListItem;