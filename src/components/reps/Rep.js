import React from 'react'
import PropTypes from 'prop-types'
import GoogleCivicContext from '../../context/civic/googleCivicContext';
import { Link } from 'react-router-dom';


const Rep = ( {rep } ) => {

    const {name,  party, phone, url, officeName, } = rep

// keep these 
// address, channels, level,line1, city, state, zip 
    console.log(rep)
    return (

        <div className="Rep mx-auto mt-4">
            <div className="d-flex justify-content-between align-items-center">
                <h2>{name}</h2>
                <p className="mb-0">{officeName}</p>
            </div>
            <div className="d-flex justify-content-between align-items-center">
                <p className="mb-0">{party}</p>
                <p className="mb-0">{phone}</p>
            </div>
            <div className="d-flex justify-content-between align-items-center">
            <Link to={`rep/${name}`}>View Official</Link>
                <p className="mb-0">{}</p>
            </div>
            {/* <img src ={photoUrl}></img> */}
            <hr /> 
        </div>

    )
 }

 export default Rep