import React, { useState } from 'react';

const ActionForm = ( { activeList, saveActiveList } ) => {
  const [itemName, setItemName] = useState("")
  
  const addItem = () => {
    if (itemName === "") {
      return;
    }

    let newItem = {"toDoItem": itemName, "completed": false};
    let id = activeList.items.length;

    activeList.items[id] = newItem;
    saveActiveList(activeList);
  
    setItemName("");
  }

    return (
        <div className="List-Item-Container">
            <img src="/add-item.png" 
              alt = "Plus-Sign"
              className="Action-Button" 
              onClick={addItem}>
            </img>
            <div className = "To-Do-Space">
              <form className='Action-Form'>
                <input 
                  className="Action-Input" type="text" 
                  value={itemName} placeholder='Enter New To-Do Item'
                  onChange = {event => setItemName(event.target.value)}>
                </input>
              </form>
            </div>
            <div className = "List-Item-Button"/>
        </div>
    );
  }

export default ActionForm;