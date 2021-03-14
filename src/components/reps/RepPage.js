import React, {useContext} from 'react'
import PropTypes from 'prop-types'
import GoogleCivicContext from '../../context/civic/googleCivicContext';

import {BrowserRouter as Router, Link} from 'react-router-dom';



const RepPage = ({match}) => {
    const googleCivicContext = useContext(GoogleCivicContext)
    const { reps, searchAddress } = googleCivicContext;
    
    let repname = match.params.repname

    let thisRep;

    // get rep info based on name
    for (let i = 0; i < reps.length; i++) {
        if (reps[i].name == repname) {
            thisRep = reps[i]
        }
    }

    console.log("thisRep: " + JSON.stringify(thisRep));
    return (
        <div>
            {repname}
        </div>
    );
}

export default RepPage;