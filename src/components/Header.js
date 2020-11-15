import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'

class Header extends Component {
    constructor(props){
        super(props)
        this.state={
            value:""
        }
    }

    homePage = () => {
        this.props.history.push("/home") 
    }

    myOrdersPage = () => {      
       this.setState({value:"My Orders"})
        this.props.history.push("/myorders")
    }

    myCartPage = () => {
        this.setState({value:"Cart"})
        this.props.history.push("/mycarts")
    }
  render() {

   
    return (
        <React.Fragment>
               
        <div className="topnav">

        <a>E Commerce Site   {this.state.value} </a>
        <a  style={{float:"right"}} onClick={this.homePage}>Home</a>
        <a style={{float:"right"}}onClick={this.myOrdersPage}>My Orders</a>
        <a  style={{float:"right"}} onClick={this.myCartPage}>Cart</a>
      </div>
   

      </React.Fragment>  
  
 
    );
  }
}

export default withRouter(Header);
