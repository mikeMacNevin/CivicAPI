import React, {useReducer } from 'react'
import axios from 'axios'
import GoogleCivicContext from './googleCivicContext'
import GoogleCivicReducer from './googleCivicReducer'


import {
    SEARCH_ADDRESS
} from '../types'

const GoogleCivicState = props => {
    const initialState = {
        reps: []
    }

    const [state, dispatch] = useReducer(GoogleCivicReducer, initialState);

    const searchAddress = async text => {
    
    const res = await axios.get(
        `https://www.googleapis.com/civicinfo/v2/representatives?key=AIzaSyA-alrA4NG9OOesuE1PE-Bb4Cpduujf0Hg&address=${text}`
    )
    dispatch({
        type: SEARCH_ADDRESS,
        payload: res.data
    })
    console.log("GoogleCivicState res.data: " + JSON.stringify(res.data))
}

return (
    <GoogleCivicContext.Provider
        value= {{
            searchAddress,
            reps: state.reps
        }}
    >
    {props.children}
    </GoogleCivicContext.Provider>
    )
}


export default GoogleCivicState;