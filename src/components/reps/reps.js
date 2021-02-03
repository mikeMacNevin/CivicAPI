import React, { Fragment, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';

import GoogleCivicContext from '../../context/civic/googleCivicContext';

import Rep from './Rep'
import AddressForm from './AddressForm';


const Reps = (props) => {
    const googleCivicContext = useContext(GoogleCivicContext)
    const { reps, searchAddress } = googleCivicContext;
    
    // const offices = reps.offices;
    const officials = reps.officials;
    const offices = reps.offices;


    if (reps.officials == undefined) {
      console.log("no reps")

      return (
        <div>
              <AddressForm />

        </div>
      )
    } else {
      console.log("reps filled")
      return (      
      <div>      
          <div className="rep-container">
            {officials.map(rep => (
                <Rep key={rep.id} rep={rep}/>
              ))}
          </div>
      </div>
      )
    }
}
export default Reps;