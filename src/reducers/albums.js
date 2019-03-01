import { SET_ALBUMS } from '../actions/album'

export default (state = [], action = {}) => {
    console.log(state, action.payload)

    switch(action.type){
        case 'ADD_ALBUM': 
            return [ ...state, { ...action.payload } ]             
        case SET_ALBUMS:
            return [...state, ...action.payload]
    
        default: 
            return state
    }
}

