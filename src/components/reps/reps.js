import React, { Fragment, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';

import GoogleCivicContext from '../../context/civic/googleCivicContext';

import Rep from './Rep'
import AddressForm from './AddressForm';
// import { waitForDomChange } from '@testing-library/react';

const Reps = (props) => {
    const googleCivicContext = useContext(GoogleCivicContext)
    const { reps, searchAddress } = googleCivicContext;
    
    // const offices = reps.offices;
    // const officials = reps.officials;


      if (reps[0] === undefined) {
        console.log("no reps")
        return (
          <div>
                <AddressForm />

          </div>
        )
      } else {
        console.log("reps filled")
        return (   
          <div className = "row">   
            <div className="rep-container col-12 col-md-6 mx-auto">            
              <ul class="nav nav-tabs justify-content-center" id="myTab" role="tablist">
                <li class="nav-item">
                  <a class="nav-link active" id="national-tab" data-toggle="tab" href="#national" role="tab" aria-controls="national" aria-selected="true">National</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" id="state-tab" data-toggle="tab" href="#state" role="tab" aria-controls="state" aria-selected="false">State</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" id="local-tab" data-toggle="tab" href="#local" role="tab" aria-controls="local" aria-selected="false">Local</a>
                </li>
              </ul>
              <div class="tab-content px-1" id="myTabContent">
                <div class="tab-pane fade show active" id="national" role="tabpanel" aria-labelledby="national-tab">

                    {/* {reps.map(rep => (
                        <Rep key={rep.id} rep={rep}/>
                      ))} */}
                      {reps.filter(x => x.level === "country").map(rep => (
                        <Rep key={rep.id} rep={rep}/>
                      ))}
                      {console.log("country level")}
                  </div>
                <div class="tab-pane fade" id="state" role="tabpanel" aria-labelledby="state-tab">
                  {reps.filter(x => x.level == "administrativeArea1").map(rep => (
                          <Rep key={rep.id} rep={rep}/>
                        ))}
                      {console.log("state level")}

                </div>
                <div class="tab-pane fade" id="local" role="tabpanel" aria-labelledby="local-tab">
                {reps.filter(x => x.level == "administrativeArea2" || "locality").map(rep => (
                          <Rep key={rep.id} rep={rep}/>
                        ))}
                  {console.log("local level")}

                </div>
            </div>
          </div>
        </div>

        )
      }
    }
    
export default Reps;