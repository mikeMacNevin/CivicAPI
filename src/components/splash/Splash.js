import './Splash.scss';
import React, { Fragment, useEffect, useContext } from 'react'
import congress from '../../assets/congress.jpg'
import AddressForm from './AddressForm';
import GoogleCivicContext from '../../context/civic/googleCivicContext';
import UnderSplash from './under/UnderSplash';
import { Link } from 'react-scroll';

const Splash = () => {


    const googleCivicContext = useContext(GoogleCivicContext)
    const { reps, searchAddress } = googleCivicContext;


        return (

            <Fragment>
                <div className="Splash">
                    <div className="SplashImage text-center text-white">
                        <h1>who governs you?</h1>
                        <div className="splash-button-wrapper">
                            <Link type="button" 
                                className="btn btn-outline-light"
                                to="BlockOne"
                                smooth={true}
                                duration={1000}
                            >
                                Find Out
                            </Link>
                        </div>
                        {/* <AddressForm /> */}
                    </div>
                </div>
                <UnderSplash />
            </Fragment>
        )

}

export default Splash;