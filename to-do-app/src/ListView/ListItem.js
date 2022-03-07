import React, { Component } from 'react';

class ListItem extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.updateItemStatus.bind(this);
    this.handleDelete = this.removeListItem.bind(this);
  }
  
  updateItemStatus() {
    this.props.itemProperties.completed = !this.props.itemProperties.completed;
  }

  removeListItem () {
    let removalItem = this.props.itemProperties.toDoItem;
    let remainingItems = this.props.activeList.items.filter((item) => {
        return item.toDoItem !== removalItem});

    this.props.activeList.items = remainingItems;
    this.props.saveActiveList(this.props.activeList);
  }
  
  render() {
    return (
        <div
          class="bg-[#E9F6FC] rounded-lg mb-px h-1/10 flex items-center justify-around" >
            <img src="/remove-item.png"
            alt="Minus-Sign" 
            class="h-1/2"
            onClick={this.handleDelete}></img>
            <div 
            class= "w-4/5 flex items-center justify-center overflow-scroll">
              {this.props.itemProperties.toDoItem}
            </div>
            <div 
              className = "h-full w-1/12 flex items-center justify-center">
                <input 
                    type="checkbox" 
                    defaultChecked={this.props.itemProperties.completed}
                    onChange={this.handleClick}>
                </input>
            </div>
        </div>
    );
  }
}

export default ListItem;