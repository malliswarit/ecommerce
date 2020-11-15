import { RECEIVE_API_DATA,SELECTED_BOOK, CART_ITEMS, CART_ITEMS_LIST } from "../actions";
import { actionChannel } from "redux-saga/effects";

const initialState = {
  data:[],
  bookSelected:[],
  cartItems:[],
  cartItemList:[]
}

export default (state = initialState, { type, data }) => {
  switch (type) {
    case RECEIVE_API_DATA:
      return {
        ...state,
        data
      };
      case SELECTED_BOOK:
      return {
        ...state,
        bookSelected:data
      };
      // case CART_ITEMS:
      // return {
      //   ...state,
      //   cartItems:data
      // };
      case CART_ITEMS_LIST:
     
    if(state.cartItemList.length > 0 ){
      const cartItems = state.cartItemList.slice();
        let productAlreadyInCart = false;
      
        cartItems.forEach((cp) => {
          if (cp.id === data.id) {
            cp.count += 1;
            console.log(cp.count)
            productAlreadyInCart = true;
          }
        });
      
        if (!productAlreadyInCart) {
          cartItems.push({ ...data, count: 1 });
        }      
      
      
        console.log(cartItems);
        return {
          ...state,
          cartItemList: cartItems
        };
    }

    else{
      return {
        ...state,
        cartItemList:[...state.cartItemList,data]
      };

    }
    
      
      
    
    default:
      return state;
  }
};
