import React from 'react'
import { useDispatch ,useSelector } from 'react-redux'


const Mobiles = () => {
    const products=useSelector(state=>state.MobilesProductReducer)
    console.log(products)
    const dispatch = useDispatch()
    return (
        <div>
            <div className="container">
                <div className="row">
                    {
                        products.map((product)=>{
                            return(
                                <div className="col-4" key={product.id}>
                                    <div className="product">
                                        <div className="product-img">
                                            <img src={product.photo} alt="" />
                                        </div>
                                        <div className="product-name">
                                            {product.p_name}
                                        </div>
                                        <div className="row">
                                            <div className="col-6">
                                                <div className="product-price">
                                                    ₹ {product.price}
                                                </div>
                                                <div className="product-add">
                                                    <button className='btn' onClick={(e)=>dispatch({type:'Add_item',payload:{product}})}>Add to Cart</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Mobiles
