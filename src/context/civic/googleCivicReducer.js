import {
    SEARCH_ADDRESS,
} from '../types'

export default (state, action) => {
    switch (action.type) {
        case SEARCH_ADDRESS:
            console.log("googleCivicReducer:")
            return {
                ...state,
                reps: action.payload
            }
        default:
            return state
    }
}