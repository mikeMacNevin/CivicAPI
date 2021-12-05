import React, { useState, useContext } from 'react'
import NavContext from '../../context/nav/navContext';
import { Link } from 'react-router-dom';

import {match} from 'react-router';




import './Rep.scss';
const Rep = ( {rep, match } ) => {

    const navContext = useContext(NavContext)


    const {name,  party, officeName, id, missed_votes } = rep


    const getPage = () => {
        console.log('get page: ' + match)
        // navContext.changeNav()
    }

    // console.log("Rep.js: " + JSON.stringify(rep))
    return (
        //Representative Basic info & Link to RepPage.js 
        <div className="Rep mx-auto mt-4">
            <p className="mb-0 under"><strong>{officeName}</strong></p>
            <div className="d-flex justify-content-between align-items-center">
                <div>
                <p className="mb-0">{name}</p>
                <p className="mb-0 second">{party}</p>
                </div> 
                <Link onClick={getPage} to={`/rep/${name}`}>
                    <button type="button" className="btn btn-outline-primary btn">View</button>
                </Link>
            </div>
            <div className="d-flex justify-content-between align-items-center">
          
            </div>

            
        </div>

    )
 }

 export default Rep