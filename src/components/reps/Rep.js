import React from 'react'
import PropTypes from 'prop-types'
import GoogleCivicContext from '../../context/civic/googleCivicContext';
import { Link } from 'react-router-dom';
import env from 'react-dotenv';
import axios from 'axios';
const Rep = ( {rep } ) => {

    const {name,  party, phone, url, officeName, photoUrl, stateId, missed_votes} = rep

    console.log("Rep.js: " + JSON.stringify(rep))
    return (
        //Representative Basic info & Link to RepPage.js 
        <div className="Rep mx-auto mt-4">
            <p className="mb-0 under">{officeName}</p>
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