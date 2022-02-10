import * as actionTypes from '../actions/authActions'
const initialState=[]

export default function saveProductReducer(state = initialState.savedProduct, action){
    switch (action.type) {
        case actionTypes.UPDATE_PRODUCT_SUCCESS:
            return action.payload
        case actionTypes.CREATE_PRODUCT_SUCCESS:
            return action.payload
        default:
            return state;
    }
}