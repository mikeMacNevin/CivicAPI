import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import GoogleCivicContext from '../../context/civic/googleCivicContext';


const Rep = ( {rep } ) => {

const {name, address, party, phones, urls, channels, photoUrl } = rep


    return (

        <div>
            <h2>{name}</h2>
            <p>{party}</p>
            <img src ={photoUrl}></img>
        </div>

    )
 }

 export default Rep