import React, { Component } from 'react';
import { connect } from "react-redux";
class Cart extends Component {
  state={
    totalcost:0
  }

  async componentDidMount(){
    if(this.props.cartItemList && this.props.cartItemList.length > 0){
      let cost = 0;
      
      {this.props.cartItemList.map((cartItem) => 
      cost = cost + cartItem.price * cartItem.count + cartItem.tax * cartItem.count
            + cartItem.shipping * cartItem.count
      )}
     await this.setState({totalcost:cost})
    }
  }
  render() {
    
    return (
     
   <React.Fragment>
      <div>
          <div style={{width:"50%", float:"left", margin:"20px"}}>
          <h1> Shipping Address</h1>
          <label> Name</label>
          <input type="text" name="name" onChange={this.handleChange} className="textField" />
          <br/>
          <label> Address</label>
          <input type="text" name="name" onChange={this.handleChange} className="textField" />
          <br/>
          <label> Phone Number</label>
          <input type="text" name="name" onChange={this.handleChange} className="textField" />
          <br/>
          <label> Pincode</label>
          <input type="text" name="name" onChange={this.handleChange} className="textField" />
          <br/>
          <div className="buttonContainer">
          <button style={{padding:"10px", marginRight:"20px"}}>Save Address </button>
          <button style={{padding:"10px", marginRight:"20px"}}>Edit Address </button>
          </div>
          
          </div>

      {this.props.cartItemList && this.props.cartItemList.length > 0 ?
        
           <div style={{width:"40%", float:"left"}}>
           <h1> Shopping Bag</h1>
          {/* <p> {cartItem.title}</p> */}
          {this.props.cartItemList.map((cartItem) => 
          <p> {cartItem.description}</p>
          )}
          <br/>

          </div>
          : <div style={{width:"40%", float:"left"}}>
          <h1> Shopping Bag</h1> 
          <p> No Items Added to Cart </p>
          </div>
          }

      </div>
        <br/>
        {this.props.cartItemList && this.props.cartItemList.length > 0 ?
        
      <div style={{width:"40%",marginTop:"350px", marginLeft:"700px"}}>
      <h1> Payment Info: CREDIT CARD </h1>
      {this.props.cartItemList.map((cartItem) => 
    <React.Fragment>
      <p> Item Price: {cartItem.price * cartItem.count} </p>
      <p> Tax Saving: {cartItem.tax * cartItem.count} </p>
      <p> Shipping charge: {cartItem.shipping * cartItem.count }  </p>
      
      </React.Fragment>    
      
      )}
     <p> Total : {this.state.totalcost}  </p> 
      <button style={{padding:"10px", marginRight:"20px"}}> Checkout </button>
      <button style={{padding:"10px", marginRight:"20px"}}> Cancel</button>
      </div> : null}
      
   </React.Fragment>
  
 
    );
  }
}
const mapStateToProps = state => ({ cartItems : state.data.cartItems,
  cartItemList:state.data.cartItemList
});




 

export default connect(mapStateToProps, null )(Cart);


