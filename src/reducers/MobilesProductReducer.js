import {SamsungData} from '../data/data'

const initialState=SamsungData;

const SamsungProductReducer=(state=initialState,action)=>{
    switch(action.type){
        
        default: return state;
    }
}

export default SamsungProductReducer;