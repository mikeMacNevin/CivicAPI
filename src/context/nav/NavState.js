import React, {useReducer } from 'react'
import { CURRENT_PARAMS } from '../types'
import navContext from './navContext' 

import {
    CURRENT_PARAMS
} from '../types'

const NavState = props => {
    const initialState = ''
    const [state, dispatch] = useReducer(navReducer, initialState)
    const changeNav = (thisPage) => {

        dispatch({
            type: CURRENT_PARAMS,
            payload: thisPage
        })
    }
    console.log('')

return (
    <NavContext.Provider
        value= {{
            changeNav,
            page: state.page
        }}>
    {props.children}
    </NavContext.Provider>
    )
}


export default NavState