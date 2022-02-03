import React, { Component } from 'react';

class ListItem extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.updateItemStatus.bind(this);
  }
  
  updateItemStatus() {
    this.props.itemProperties.completed = !this.props.itemProperties.completed;
  }
  
  render() {
    return (
        <div className="List-Item-Container">
            <img src="/minus-button.png" className="Action-Button"></img>
            <div className = "To-Do-Space">{this.props.itemProperties.toDoItem}</div>
            <div className = "List-Item-Button">
                <input 
                    type="checkbox" className='List-Checkbox' 
                    defaultChecked={this.props.itemProperties.completed}
                    onChange={this.handleClick}>
                </input>
            </div>
        </div>
    );
  }
}

export default ListItem;