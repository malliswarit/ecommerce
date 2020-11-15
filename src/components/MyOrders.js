import React, { Component } from 'react';
import { connect } from "react-redux";

class MyOrders extends Component {
  render() {
    
    return (

        <React.Fragment>
    
     <div className="ordersummary">
     {this.props.cartItemList && this.props.cartItemList.length > 0 ?
     this.props.cartItemList.map((cartItem) => 
     <React.Fragment>
         <div className="orderdetails" >
         <h5 style={{display:"inline-block"}}> Order Placed : 14th Nov 2019</h5>
         <span>
         <h5 style={{float:"right"}}> Status: Delivered</h5>
         </span>
         
         </div>
         <div style={{width:"20%", float:"left"}}>
        <img src={`images/${cartItem.sku}.jpg`} 
className= "imageClass"  alt="book" /> 
        </div>

         <div style={{width:"60%", float:"left"}}>
         <p> Book Price : {cartItem.price}</p>
   <p> Author Name : {cartItem.author}</p>
   <p> Page Count:{cartItem.pages} </p>
        </div>
        </React.Fragment>
     ) : 
     
     
     <React.Fragment>
         <div className="orderdetails" >
         <h5 style={{display:"inline-block"}}> Order Placed : 14th Nov 2019</h5>
         <span>
         <h5 style={{float:"right"}}> Status: Delivered</h5>
         </span>
         
         </div>
         <div style={{width:"20%", float:"left"}}>
        <img src={`images/static.jpg`}
className= "imageClass"  alt="book" /> 
        </div>

         <div style={{width:"60%", float:"left"}}>
         <p> Book Price : 200</p>
   <p> Author Name : "Stephen"</p>
   <p> Page Count: 400 </p>
        </div>
        </React.Fragment>
}
     </div>

      
     </React.Fragment>
  
 
    );
  }
}
const mapStateToProps = state => ({ cartItems : state.data.cartItems,
        cartItemList:state.data.cartItemList
      });
      
 export default connect(mapStateToProps, null )(MyOrders);

