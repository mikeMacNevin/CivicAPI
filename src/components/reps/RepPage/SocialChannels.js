import React, {useContext, useDebugValue, useEffect, useState, Fragment} from 'react'
import GoogleCivicContext from '../../../context/civic/googleCivicContext'





 const SocialChannels = ( {repSocial} ) => {

    const [thisRep, setThisRep] = useState({})

    useEffect( () => {
        setThisRep(repSocial)

    }, [])

    

    console.log(repSocial)
    //  console.log(repSocial.facebookUrl)
        return (
            <Fragment>
                {repSocial.url && 
                <a id="repWebsiteButton" target="_blank" href={repSocial.url} >
                    <button className="btn mx-1 btn-dark website-button">Website</button>
                </a>
                }
                {repSocial.twitterUrl &&
                <a id="button "target="_blank" href={repSocial.twitterUrl} >    
                    <button className="btn mx-1 twitter-button"> <i className="fab fa-twitter"></i> Twitter</button>
                </a> 
                }
                {repSocial.facebookUrl &&
                <a id="button "target="_blank" href={repSocial.facebookUrl} >    
                    <button className="btn mx-1 facebook-button"> <i className="fab fa-facebook"></i> Facebook</button>
                </a> 
                }
                {repSocial.youtubeUrl &&
                <a id="button "target="_blank" href={repSocial.youtubeUrl} >    
                    <button className="btn mx-1 youtube-button"> <i className="fab fa-youtube"></i> Youtube</button>
                </a> 
                }
            </Fragment>
        );

 }


 export default SocialChannels;