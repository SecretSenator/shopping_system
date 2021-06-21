const initialState={
    products:[],
    totalPrice:0,
    totalQuantity:0
}

const CartValue=(state=initialState,action)=>{

    switch(action.type){
        case 'Add_item' : const {product}=action.payload;
                          const tprice=product.price + state.totalPrice;
                          const titems=state.totalQuantity+1;
                          console.log(state)
                          product.id= new Date().getTime().toString();
                          return {...state,products:[...state.products,product],totalPrice:tprice,totalQuantity:titems}
        
        case 'remove'   : 
                          if(state.totalQuantity<1) return state;
                          const tProduct=state.products.find(product=>product.id===action.payload)
                          const newItems=state.products.filter(product=>product.id!==action.payload)
                          return {...state,products:newItems,totalPrice:state.totalPrice-tProduct.price,totalQuantity:state.totalQuantity-1}

            default     :  return state;
    }
}

export default CartValue;