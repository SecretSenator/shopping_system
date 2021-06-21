import {createStore, combineReducers} from 'redux'
import {devToolsEnhancer} from 'redux-devtools-extension'
import MobilesProductReducer from './MobilesProductReducer' 
import LaptopsProductReducer from './LaptopsProductReducer'
import DressProductReducer from './DressProductReducer'

import CartReducer from './CartReducer'

const root=combineReducers({
    MobilesProductReducer,LaptopsProductReducer,DressProductReducer, CartReducer
})

const store=createStore(root,devToolsEnhancer());

export default store;