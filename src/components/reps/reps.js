import React, { Fragment, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';

import GoogleCivicContext from '../../context/civic/googleCivicContext';

import Rep from './Rep'
import AddressForm from './AddressForm';
import RepNav from './RepNav';
// import { waitForDomChange } from '@testing-library/react';

const Reps = (props) => {

    const googleCivicContext = useContext(GoogleCivicContext)
    const { reps, searchAddress } = googleCivicContext;
    

      if (reps.length < 3) {
        return (
          <div>
                <AddressForm />
          </div>
        )
      } else {
        return (   
          <div className = "row">   
            <div className="rep-container col-12 col-sm-6 col-lg-4 mx-auto mt-3">  
              {/*REP NAVIGATION TABS*/}       
              <RepNav />
              {/*SHOW REPS*/}       
              <div class="tab-content" id="myTabContent">
                {/***COUNTRY LEVEL REPS***/}
                <div class="tab-pane fade show active" id="national" role="tabpanel" aria-labelledby="national-tab">
                    {reps.filter(x => x.level === "country").map(rep => (
                      <Rep key={rep.id} rep={rep}/>
                    ))}
                </div>
                {/*STATE LEVEL REPS*/}                  
                <div class="tab-pane fade" id="state" role="tabpanel" aria-labelledby="state-tab">
                  {reps.filter(x => x.level == "administrativeArea1").map(rep => (
                          <Rep key={rep.id} rep={rep}/>
                        ))}
                {/*LOCAL LEVEL REPS*/}                  
                </div>
                <div class="tab-pane fade" id="local" role="tabpanel" aria-labelledby="local-tab">
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