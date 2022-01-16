import React, { Fragment, useEffect, useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { useParams } from 'react-router';
import GoogleCivicContext from '../../context/civic/googleCivicContext';

import Rep from './Rep'
import RepNav from './RepNav';

import './Reps.scss'

const Reps = (props) => {
    const googleCivicContext = useContext(GoogleCivicContext)
    const { reps, searchAddress } = googleCivicContext
  
const params = useParams()

console.log("PARAMS: " + JSON.stringify(params))
  console.log("reps.js reps: " + JSON.stringify(reps))
  // console.log("reps.js props: " + props.location.pathname.includes('/rep/'))
  useEffect(() => {
    
  })

      if (reps.length < 3) {
        return (
          <div>
{/* <AddressForm>*/}
          </div>
        )
      }

      else if (params.hasOwnProperty('repname')) {
        return (   
          <div className="container-fluid">
          <div className = "row Reps Reps-loaded">   

            <div className="reps-container reps-container-done col-12 col-sm-5">    
              <RepNav />
              <div className="tab-content" id="myTabContent">
                {/***COUNTRY LEVEL REPS***/}
                <div className="tab-pane fade show active" id="national" role="tabpanel" aria-labelledby="national-tab">
                  {reps.filter(x => x.level === "country").map(rep => (<Rep key={rep.id} rep={rep}/>))}
                </div>
                {/*STATE LEVEL REPS*/}                  
                <div className="tab-pane fade" id="state" role="tabpanel" aria-labelledby="state-tab">
                  {reps.filter(x => x.level == "administrativeArea1").map(rep => (<Rep key={rep.id} rep={rep}/>))}
                {/*LOCAL LEVEL REPS*/}                  
                </div>
                <div className="tab-pane fade" id="local" role="tabpanel" aria-labelledby="local-tab">
                  {reps.filter(x => (x.level == "administrativeArea2" || x.level =="locality")).map(rep => (<Rep key={rep.id} rep={rep}/>))}
                </div>
              </div>
            </div>

            <div class="col-sm-7 offset-sm-5 rep-display-done">
            <Outlet />
            </div>
          </div>
          </div>
        )
      }
      else {
        return (   

          <div className = "row Reps container-fluid">   


            <div className="reps-intro col-12 col-sm-7 d-flex flex-column  justify-content-center">
              <h1>Your Representatives</h1>
            <div className="text-left">
              <p>View your national, state, and local government representatives.  Follow them through various media feeds.  Feel free to give them a call if you have something to tell them.</p>
              </div>
            </div>

            <div className="reps-container col-12 col-sm-5 ">    
                <RepNav />
                <div className="tab-content" id="myTabContent">
                  {/***COUNTRY LEVEL REPS***/}
                  <div className="tab-pane fade show active" id="national" role="tabpanel" aria-labelledby="national-tab">
                    {reps.filter(x => x.level === "country").map(rep => (<Rep key={rep.id} rep={rep}/>))}
                  </div>
                  {/*STATE LEVEL REPS*/}                  
                  <div className="tab-pane fade" id="state" role="tabpanel" aria-labelledby="state-tab">
                    {reps.filter(x => x.level == "administrativeArea1").map(rep => (<Rep key={rep.id} rep={rep}/>))}
                  {/*LOCAL LEVEL REPS*/}                  
                  </div>
                  <div className="tab-pane fade" id="local" role="tabpanel" aria-labelledby="local-tab">
                    {reps.filter(x => (x.level == "administrativeArea2" || x.level =="locality")).map(rep => (<Rep key={rep.id} rep={rep}/>))}
                  </div>
                </div>
            </div>





          </div>

        )
      }
    }
    
export default Reps;