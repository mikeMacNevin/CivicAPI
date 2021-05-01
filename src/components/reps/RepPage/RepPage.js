import React, {useContext, useDebugValue, useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import GoogleCivicContext from '../../../context/civic/googleCivicContext'

import {BrowserRouter as Router, Link} from 'react-router-dom'
import SocialChannels from './SocialChannels'



const RepPage = ({match}) => {
    const googleCivicContext = useContext(GoogleCivicContext)
    const { reps, searchAddress } = googleCivicContext;
    
    const [thisRep, setThisRep] = useState({})
    // get specific representative name
    let repname = match.params.repname

    // 
    let repHolder = {};

    repHolder.twitterUrl = '';
    repHolder.facebookUrl = '';
    repHolder.youtubeUrl = '';

    // get rep info based on name
    useEffect(() => {
        
        for (let i = 0; i < reps.length; i++) {
            if (reps[i].name == repname) {
                repHolder = reps[i]
                console.log("thisRep: " + JSON.stringify(repHolder));
                // BREAKUP "CHANNELS" (URLs)
                if (reps[i].channels) {
                    reps[i].channels.forEach(element => {
                        // TWITTER
                        if (element.type.toLowerCase().indexOf('twitter.com') > -1) {
                            repHolder.twitterUrl = "https://" + element.type
                        }
                        // YOUTUBE
                        if (element.type.toLowerCase().indexOf('youtube.com') > -1) {
                            repHolder.facebookUrl = "https://" + element.type
                        }
                        // FACEBOOK
                        if (element.type.toLowerCase().indexOf('facebook.com') > -1) {
                            repHolder.youtubeUrl = "https://" + element.type
                        }
                    })
                    console.log("reeepppp hollldderrr" + JSON.stringify(repHolder))
                }
                setThisRep(repHolder)
                repname = '';
            }
        }
     }, [])

     const {
        officeName,
        url,
        channels,
        twitterUrl,
        facebookUrl,
        youtubeUrl
     } = thisRep;

    return (
        <div className="container text-center mt-3">
            <h2>{repname}</h2>
            <h5><i>{officeName}</i></h5>

            <p>Political Party: {}</p>
            <SocialChannels repSocial={thisRep}></SocialChannels>

        </div>
    );
}

export default RepPage;





// {url && 
//     <a id="repWebsiteButton" target="_blank" href={url} >
//         <button className="btn mx-1 btn-dark website-button"><i class="fas fa-globe"> Website</i></button>
//     </a>
//     }
//     { twitterUrl &&
//         <a id="button "target="_blank" href={twitterUrl} >    
//             <button className="btn mx-1 twitter-button"> <i class="fab fa-twitter"></i> Twitter</button>
//         </a> 
//     }
//     { facebookUrl &&
//         <a id="button "target="_blank" href={facebookUrl} >    
//             <button className="btn mx-1 facebook-button"> <i class="fab fa-facebook"></i> Facebook</button>
//         </a> 
//     }
//     { youtubeUrl &&
//         <a id="button "target="_blank" href={youtubeUrl} >    
//             <button className="btn mx-1 youtube-button"> <i class="fab fa-youtube"></i> Youtube</button>
//         </a> 
//     }