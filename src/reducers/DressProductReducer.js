import {DressData} from '../data/data'

const initialState=DressData;

const DressProductReducer=(state=initialState,action)=>{
    switch(action.type){
        
        default: return state;
    }
}

export default DressProductReducer;