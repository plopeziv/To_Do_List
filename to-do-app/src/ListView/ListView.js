import ListItem from './ListItem';
import ActionForm from './ActionForm';
import React from 'react';

const ListView = ({ activeList, saveActiveList }) => {

  if (!activeList) {
    return <div className="List-View">
      <div className='Logo-Container'>
        <img src="/8L.png" className="App-logo" alt="logo" />
      </div>
    </div>
  }

  return (
      <div className="List-View">
        <ActionForm activeList={activeList} saveActiveList={saveActiveList} />
        {activeList.items.map(entry => ( 
          <ListItem 
            key={entry.toDoItem} 
            activeList={activeList}
            saveActiveList={saveActiveList}
            itemProperties={entry}>
          </ListItem>
          )
        )}
      </div>
  );
}

export default ListView;