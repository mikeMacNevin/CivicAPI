import React, {useContext, useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import GoogleCivicContext from '../../context/civic/googleCivicContext'

import {BrowserRouter as Router, Link} from 'react-router-dom'



const RepPage = ({match}) => {
    const googleCivicContext = useContext(GoogleCivicContext)
    const { reps, searchAddress } = googleCivicContext;
    
    const [thisRep, setThisRep] = useState({})
    // get specific representative name
    let repname = match.params.repname

    // isolate this representative's data
    // let thisRep;

    // get rep info based on name
    useEffect(() => {
        for (let i = 0; i < reps.length; i++) {
            if (reps[i].name == repname) {
                thisRep = reps[i]
                setThisRep(thisRep)
            }
        }
     }, [repname])

    console.log("thisRep: " + JSON.stringify(thisRep));

    return (
        <div>
            {repname}
        </div>
    );
}

export default RepPage;