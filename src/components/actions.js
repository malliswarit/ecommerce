export const REQUEST_API_DATA = "REQUEST_API_DATA";
export const RECEIVE_API_DATA = "RECEIVE_API_DATA";
export const SELECTED_BOOK ="SELECTED_BOOK";
export const CART_ITEMS = 'CART_ITEMS';
export const CART_ITEMS_LIST ="CART_ITEMS_LIST";

export const requestApiData = () => ({ type: REQUEST_API_DATA });
export const receiveApiData = data => ({ type: RECEIVE_API_DATA, data });
export const selectedBook = data => ({ type: SELECTED_BOOK, data });
export const setCartItems = (data) =>  ({type:CART_ITEMS, data});
export const getcartItemsList = (data,cartItemsList) => ({type:CART_ITEMS_LIST, data})
  // console.log(data)
  // //console.log(cartItemsList)
  
    // if(cartItemsList && cartItemsList.length > 0){
    //     const cartItems = cartItemsList.slice();
    //     let productAlreadyInCart = false;
      
    //     cartItems.forEach((cp) => {
    //       if (cp.id === data.id) {
    //         cp.count += 1;
    //         productAlreadyInCart = true;
    //       }
    //     });
      
    //     if (!productAlreadyInCart) {
    //         cartItemsList.push({ ...data, count: 1 });
    //     }
    //     console.log(data)
    //     ({type:CART_ITEMS_LIST, cartItemsList})
    //    }
    //    else{
    //     ({type:CART_ITEMS_LIST, data})
    //    }

       
