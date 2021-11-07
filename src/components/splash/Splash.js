import './Splash.scss';
import React, { Fragment, useEffect, useContext } from 'react'
import congress from '../../assets/congress.jpg'
import AddressForm from './AddressForm';
import GoogleCivicContext from '../../context/civic/googleCivicContext';

const Splash = () => {


    const googleCivicContext = useContext(GoogleCivicContext)
    const { reps, searchAddress } = googleCivicContext;
    if (reps.length < 2 ) {
        return (
            <div className="Splash">
                <div className="SplashImage text-center text-white">
                    <h1>who governs you?</h1>
                    
                    
                    <AddressForm />

                </div>
            </div>
        )
    }
    else {
        return (
            <div>
            </div>
        )
    }
}

export default Splash;