import {
    SEARCH_ADDRESS,
} from '../types'

export default (state, action) => {
    switch (action.type) {
        case SEARCH_ADDRESS:
            console.log("googleCivicReducer: SEARCH_ADDRESS triggered ---")
            return {
                ...state,
                reps: action.payload
            }

        // case EMPTY_REPS:
        //     console.log("googleCivicReducer: EMPTY_REPS" )
        //     return {
        //         ...state,
        //         reps: action.payload
        //     }
        default:
            return state
    }
}