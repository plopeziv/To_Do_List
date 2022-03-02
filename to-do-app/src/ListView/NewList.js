import React, { Component } from 'react';

class NewList extends Component {
  constructor(props) {
    super(props);

    this.state = {
        inputValue:""
    }

    this.imageClickHandler = this.createNewList.bind(this)
  }
  
  createNewList () {
    if (this.state.inputValue === "") {
      return;
    }
    
    let newList = { "title": this.state.inputValue, "user": "Default User", "items": [] };

    this.props.createList(newList);
    this.props.getAllLists();
    this.setState({inputValue: ""});
  }
  
  render() {
    return (
        <div 
          class="bg-[#4c535a] text-[#61dafb] flex items-center whitespace-nowrap rounded-lg pr-2.5 mr-2.5">
            <img
            alt="Plus-Clipboard" 
            class="h-2/3 ml-2 mr-1" 
            src="./add-list.png" 
            onClick={this.imageClickHandler} />
            <input 
                class="text-[#61dafb] text-center bg-transparent text-xl w-40 md:text-3xl md:w-56 border-transparent box-border outline-none"  
                type="text" 
                value= {this.state.inputValue} 
                onChange={event => this.setState({inputValue: event.target.value})}
                placeholder='Enter New List'>     
            </input>
        </div>
    );
  }
}

export default NewList;