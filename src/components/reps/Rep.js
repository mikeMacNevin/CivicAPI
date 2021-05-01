import React from 'react'
import PropTypes from 'prop-types'
import GoogleCivicContext from '../../context/civic/googleCivicContext';
import { Link } from 'react-router-dom';


const Rep = ( {rep } ) => {

    const {name,  party, phone, url, officeName, } = rep

// keep these 
// address, channels, level,line1, city, state, zip 
    console.log("Rep: " + rep)
    return (

        <div className="Rep mx-auto mt-4">
            <div className=" text-center">
                <p className="mb-0 under">{officeName}</p>
            </div>
            <div className="d-flex justify-content-between align-items-center">
                <div>
                <p className="mb-0">{name}</p>
                <p className="mb-0 second">{party}</p>
                </div>
                <Link to={`rep/${name}`}>
                    <button type="button" className="btn btn-outline-primary btn">View</button>
                </Link>

            </div>
            <div className="d-flex justify-content-between align-items-center">
          
            </div>
            {/* <img src ={photoUrl}></img> */}
        </div>

    )
 }

 export default Rep