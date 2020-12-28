import React, { Fragment, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import GoogleCivicContext from '../../context/civic/googleCivicContext';

const Reps = ({ match }) => {
    const googleCivicContext = useContext(GoogleCivicContext)
    const { searchAddress, reps } = googleCivicContext;
    
    useEffect(() => {
         searchAddress();
        //eslint-disable-next-line

      }, []);

    console.log("reps:" + reps)

    return (
        <Fragment>

        </Fragment>
    )
}
export default Reps;