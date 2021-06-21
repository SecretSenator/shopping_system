import React from 'react'
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './reducers/index'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Cart from './components/Cart'
import Laptops from './components/Laptops'
import Mobiles from './components/Mobiles'
import Dress from './components/Dress'

import './App.css'

const App = () => {
  return (
    <Router>
        <Provider store={store}>
          <Navbar/>
        <Route path='/' exact component={Home} />
        <Route path='/cart' exact component={Cart}/>
        <Route path='/mobiles' exact component={Mobiles}/>
        <Route path='/laptops' exact component={Laptops}/>
        <Route path='/dress' exact component={Dress}/>
        </Provider>
        
    </Router>
  )
}

export default App
