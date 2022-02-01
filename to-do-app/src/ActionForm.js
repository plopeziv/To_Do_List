import React, { Component } from 'react';

class ActionForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="List-Item-Container">
            <img src="/plus.png" className="Action-Button"></img>
            <div className = "To-Do-Space">
              <form className='Action-Form'>
                <input className="Action-Input" type="text" placeholder='New To-Do Item'></input>
              </form>
            </div>
            <div className = "List-Item-Button"/>
        </div>
    );
  }
}

export default ActionForm;