import {
    CURRENT_PARAMS,
} from '../types'

export default (state, action) => {
    switch (action.type) {
        case CURRENT_PARAMS:
            console.log("navReducer triggered: CURRENT_PARAMS triggered ---")
            return {
                ...state,
                page: action.payload
            }
        default:
            return state
    }
}