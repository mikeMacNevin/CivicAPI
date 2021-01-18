import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import GoogleCivicContext from '../../context/civic/googleCivicContext';


const Rep = ( {rep} ) => {
    return (
        <div>{rep.name}</div>
    )
 }

 export default Rep