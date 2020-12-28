import React, {useReducer } from 'react'
import axios from 'axios'
import googleCivicContext from './googleCivicContext'
import googleCivicReducer from './googleCivicReducer'


import {
    SEARCH_ADDRESS
} from '../types'

const GoogleCivicState = props => {
    const initialState = {
        reps: {}
    }

    const [state, dispatch] = useReducer(googleCivicReducer, initialState);

    const searchAddress = async text => {
    
    const res = await axios.get(
        `${"https://www.googleapis.com/civicinfo/v2/representatives?key=AIzaSyA-alrA4NG9OOesuE1PE-Bb4Cpduujf0Hg&address=1263%20Pacific%20Ave.%20Kansas%20City%20KS&electionId=2000"}`
    )
    dispatch({
        SEARCH_ADDRESS,
        payload:res.data
    })
    // console.log("GoogleCivicState: " + JSON.stringify(res))
}

return (
    <googleCivicContext.Provider
        value= {{
            searchAddress,
            reps: state.reps
        }}
    >
    {props.children}
    </googleCivicContext.Provider>
    )
}


export default GoogleCivicState;