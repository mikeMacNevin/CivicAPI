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
                        <div className="mask-layer">
                            <h1>Who Governs You?</h1>
                            <div className="splash-button-wrapper">
                            <AddressForm />

                                {/* <Link type="button" 
                                    className="btn btn-outline-light"
                                    to="BlockOne"
                                    smooth={true}
                                    duration={1000}
                                >
                                    Find Out
                                </Link> */}
                            </div>
                            <ul>
                                <li>Find US, state, local representatives</li>
                                <li>View upcoming elections</li>
                                <li>Decide who is worthy of your vote</li>
                            </ul>
                        </div>
                        {/* <AddressForm /> */}
                    </div>
                </div>

                {/* Taking Out 1/30/22*/}
                {/* <UnderSplash /> */}
            </Fragment>
        )

}

export default Splash;