import React, { Fragment, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';

import GoogleCivicContext from '../../context/civic/googleCivicContext';

import Rep from './Rep'
import AddressForm from '../splash/AddressForm';
import RepNav from './RepNav';

import './Reps.scss'

const Reps = (props) => {

    const googleCivicContext = useContext(GoogleCivicContext)
    const { reps, searchAddress } = googleCivicContext;
    
  console.log("reps.js reps: " + JSON.stringify(reps))
      if (reps.length < 3) {
        return (
          <div>
{/* <AddressForm>*/}
          </div>
        )
      } else {
        return (   
          <div className = "row Reps container-fluid">   
            <div className="reps-intro col-12 col-sm-7 d-flex flex-column align-items-center justify-content-center">
                <h1>Your Representatives</h1>
                <div className="text-left">
                  <p>View your national, state, and local government representatives.</p>
                  <p>Follow them through various media feeds.</p>
                  <p>Feel free to give them a call if you have something to tell them.</p>
                </div>
            </div>
            <div className="rep-container col-12 col-sm-5 ">  
              {/*REP NAVIGATION TABS*/}       
              <RepNav />
              {/*SHOW REPS*/}       
              <div className="tab-content" id="myTabContent">
                {/***COUNTRY LEVEL REPS***/}
                <div className="tab-pane fade show active" id="national" role="tabpanel" aria-labelledby="national-tab">
                    {reps.filter(x => x.level === "country").map(rep => (
                      <Rep key={rep.id} rep={rep}/>
                    ))}
                </div>
                {/*STATE LEVEL REPS*/}                  
                <div className="tab-pane fade" id="state" role="tabpanel" aria-labelledby="state-tab">
                  {reps.filter(x => x.level == "administrativeArea1").map(rep => (
                          <Rep key={rep.id} rep={rep}/>
                        ))}
                {/*LOCAL LEVEL REPS*/}                  
                </div>
                <div className="tab-pane fade" id="local" role="tabpanel" aria-labelledby="local-tab">
                {reps.filter(x => (x.level == "administrativeArea2" || x.level =="locality")).map(rep => (
                          <Rep key={rep.id} rep={rep}/>
                        ))}
                </div>
              </div>
          </div>
        </div>

        )
      }
    }
    
export default Reps;