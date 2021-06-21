import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {AiOutlineMinusCircle} from 'react-icons/ai'

const Cart = () => {
    const dispatch = useDispatch();
    const {products,totalQuantity,totalPrice}=useSelector(state=>state.CartReducer)
    console.log(products)
    return (
        <div className='cart'>   
            <div className='container'>
                <h3 style={{marginTop:'50px'}}>Your Cart</h3>
                {totalQuantity<1? <h2 style={{marginTop:'40px', color:'red'}}>Your Cart is Empty!!!</h2> :
                <>
                    <div className="row">
                        <div className="col-9">
                          <div className="cart-heading">
                            <div className="row">
                                <div className="col-3">
                                    Picture
                                </div>
                                <div className="col-3">
                                    name
                                </div>
                                <div className="col-3">
                                    price
                                </div>
                                <div className="col-3">
                                    remove
                                </div>
                            </div>
                          </div> 
                          {
                              products.map((product)=>{
                              return (
                                  <div className="row" key={product.id}>
                                      <div className="col-3">
                                        <img src={product.photo} alt="" />
                                      </div>
                                      <div className="col-3">
                                        {product.p_name}
                                      </div>
                                      <div className="col-3">
                                        ₹ {product.price}
                                      </div>
                                      <div className="col-3" style={{cursor:'pointer'}} onClick={(e)=>dispatch({type:'remove',payload:product.id})}>
                                      <AiOutlineMinusCircle></AiOutlineMinusCircle>
                                      </div>
                                      
                                  </div>
                                  
                              )
                          })}                       
                        </div>
                        <div className="col-3 summary-col">
                            <div className="summary">
                                <div className="summary-heading">
                                    Summary
                                </div>
                                <div className="summary-details">
                                    <div className="col-6">
                                        Total Items: 
                                    </div>
                                    <div className="col-6">
                                        {totalQuantity}
                                    </div>
                                    <div className="col-6">
                                        Total Price: 
                                    </div>
                                    <div className="col-6">
                                        ₹ {totalPrice}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>}
            </div>          
        </div>
    )
}

export default Cart
