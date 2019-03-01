export default (state = [], action = {}) => {
    console.log(state, action.payload)

    switch(action.type){
        case 'ADD_ALBUM': 
            return [ ...state, { ...action.payload } ]             
        default: 
            return state
    }
}

