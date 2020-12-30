import React, { Fragment, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';

import GoogleCivicContext from '../../context/civic/googleCivicContext';

import Rep from './Rep'

const Reps = () => {
    const googleCivicContext = useContext(GoogleCivicContext)
    const { reps } = googleCivicContext;
    


    console.log(JSON.stringify(reps.data));

    return (
       <div className="rep-container">
         {/* {reps.map(reps => (
           <Rep key={reps.name} reps={reps} />
         ))} */}
       </div>
    )
}
export default Reps;