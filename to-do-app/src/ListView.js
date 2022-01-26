import logo from './logo.svg';
import React, { Component } from 'react';

class ListView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titles: []
    }
  }

  componentDidMount(){
    this.setState({
        titles:this.props.activeList[0]}).then()
  }



  render() {

    //   if(this.props.activeList === ""){
    //       displayRender = <img src={logo} className="App-logo" alt="logo" /> 
    //   }
      

    return (
        <div className="List-View"></div>
    );
  }
}

export default ListView;