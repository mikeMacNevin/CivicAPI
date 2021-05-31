import React, {useReducer } from 'react'
import axios from 'axios'
import GoogleCivicContext from './googleCivicContext'
import GoogleCivicReducer from './googleCivicReducer'

import proPublica from './apis/propublica'
import repTest from './apis/googlereps'


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
        let apple = repTest(res.data)
        let orange = proPublica(apple).then( (resp) => {
            console.log("civic then propub: " + JSON.stringify(resp))
            dispatch({
                type: SEARCH_ADDRESS,
                payload: resp
            })  
        })
        console.log("APPPPLLLLEE : " + JSON.stringify(apple))
        console.log("ORANGEEEE : " + JSON.stringify(orange))




            // console.log("res.data: " + JSON.stringify(repTest(res.data)))
        
  
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



