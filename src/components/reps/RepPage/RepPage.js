import React, {useContext, useDebugValue, useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import GoogleCivicContext from '../../../context/civic/googleCivicContext'
import SocialChannels from './SocialChannels'
import Twitter from './Twitter'
import RepImage from './RepImage'

import {match, useParams, useLocation} from 'react-router';


const RepPage = ({match}) => {
    const googleCivicContext = useContext(GoogleCivicContext)
    const { reps, searchAddress } = googleCivicContext;

    const params = useParams();
    //nav context 
    // const navContext = useContext(navContext)
    // const { page, changeNav} = navContext;

    //state
    const [thisRep, setThisRep] = useState({})
    // get specific representative name
    let repname = params.repname

    // 
    let repHolder = {};

    repHolder.twitterUrl = '';
    repHolder.facebookUrl = '';
    repHolder.youtubeUrl = '';

    // get rep info based on name - setThisRep state
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
                            repHolder.youtubeUrl = "https://" + element.type
                        }
                        // FACEBOOK
                        if (element.type.toLowerCase().indexOf('facebook.com') > -1) {
                            repHolder.facebookUrl = "https://" + element.type
                        }
                    })
                    console.log("reeepppp hollldderrr" + JSON.stringify(repHolder))
                }
                setThisRep(repHolder)
                repname = '';
            }
        }
     }, [repname])

     const {
        officeName,
        url,
        channels,
        twitterUrl,
        facebookUrl,
        youtubeUrl,
        party,
        photoUrl,
        phone,
        stateId
     } = thisRep;

     console.log("RepPage: thisRep: " + JSON.stringify(thisRep))

    return (
        <div className=" text-center mt-3">
            <h2>{repname}</h2>
            <h5><i>{officeName}</i></h5>
            <RepImage photoUrl={photoUrl}></RepImage>
            <p className="pb-1">{party}</p>
            <p>Office: {phone}</p>
            <SocialChannels repSocial={thisRep}></SocialChannels>
            <Twitter key={twitterUrl} twitter={twitterUrl}></Twitter>
        </div>
    );
}

export default RepPage;



