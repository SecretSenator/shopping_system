import React from 'react'
import {Link} from 'react-router-dom'
import { BsFillBagFill } from "react-icons/bs";
import { useSelector } from 'react-redux';

const Navbar = () => {
    const totalItems=useSelector(state=>state.CartReducer.totalQuantity)
    return (
        <div className='navbar'>
            <div className='container'>
                <div className='nav-container'>
                    <div className='left-nav'>
                        <Link to='/shopping_system'><h3>Cart System</h3></Link>
                    </div>
                    <div className="nav-mobile">
                        <Link to='/shopping_system/mobiles'><h3>Mobiles</h3></Link>
                    </div>
                    <div className="nav-laptop">
                        <Link to='/shopping_system/laptops'><h3>Laptops</h3></Link>
                    </div>
                    <div className="nav-dress">
                        <Link to='/shopping_system/dress'><h3>Dress</h3></Link>
                    </div>
                    <div className='right-nav'>
                        <Link to='/shopping_system/cart'>
                            <div className="cart">
                                <BsFillBagFill style={{color : '#EA2027', fontSize:'30px'}}/>
                                <span>{totalItems}</span>
                            </div>
                            
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
