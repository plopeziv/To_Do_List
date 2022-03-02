import ListItem from './ListItem';
import ActionForm from './ActionForm';
import React, { Component } from 'react';

class ListView extends Component {

  render() {
    let view;

    if (this.props.activeList === undefined) {
      view = <div 
        class="h-full flex items-center justify-center" > 
        <img 
          class="h-38vmin pointer-events-none" 
          src="/8L.png" 
          alt="logo" />  
      </div>;
    } else {
        const items = this.props.activeList.items.map(
        entry => <ListItem 
          key={entry.toDoItem} 
          activeList = {this.props.activeList}
          saveActiveList = {this.props.saveActiveList}
          itemProperties = {entry}>
        </ListItem>)
      
      view = <>
        <ActionForm activeList = {this.props.activeList} saveActiveList = {this.props.saveActiveList}/>
        {items}
      </>
    }

    return (
        <div 
          class="h-full w-full overflow-scroll mt-2">
          {view}
        </div>
    );
  }
}

export default ListView;