import React from 'react'
import { useDispatch ,useSelector } from 'react-redux'


const Dress = () => {
    const products=useSelector(state=>state.DressProductReducer)
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
                                        <div className="product-img" style={{display: 'flex', justifyContent:'center',alignItems:'center'}}>
                                            <img src={product.photo} alt="" style={{ width: '10rem',  height: '20rem',marginBottom:'0px'}}/>
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

export default Dress
